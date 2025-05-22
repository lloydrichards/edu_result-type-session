import { Data, Either, Schema } from "effect";

// region errors
import type { ParseError } from "effect/ParseResult";

export class DataException extends Data.TaggedError(
  "FetchException"
)<{
  message: string;
  reason?: unknown;
}> {}

export class BadServerResponse extends Data.TaggedError(
  "BadServerResponse"
)<{
  message: string;
}> {}

export type DataFailure =
  | DataException
  | BadServerResponse
  | ParseError;

// endregion errors

const Datum = Schema.Struct({
  xValue: Schema.Number,
  yValue: Schema.Number,
  category: Schema.String,
});

// region snippet
const getData = async (
  from: string
): Promise<
  Either.Either<
    ReadonlyArray<typeof Datum.Type>,
    DataFailure
  >
> => {
  try {
    const url = `/api/data?from=${from}`;
    const res = await fetch(url);
    if (!res.ok) {
      return Either.left(
        new BadServerResponse({
          message: `Bad server response: ${res.statusText}`,
        })
      );
    }
    const data = await res.json();
    const parseResult =
      Schema.decodeUnknownEither(
        Schema.Array(Datum)
      )(data);
    if (parseResult._tag === "Left") {
      return Either.left(parseResult.left);
    }

    return Either.right(parseResult.right);
  } catch (error) {
    return Either.left(
      new DataException({
        message: "Unable to fetch data",
        reason: error,
      })
    );
  }
};
// endregion snippet

// region main
const main = async () => {
  const result = await getData("2024");

  return Either.match(result, {
    onLeft: (_left) =>
      console.log("Unable to get data"),
    onRight: (right) => {
      console.log("Data received", right);
    },
  });
};
// endregion main
