import { Data, Either, Schema } from "effect";
import type { ParseError } from "effect/ParseResult";

export class DataException extends Data.TaggedError("FetchException")<{
  message: string;
  reason?: unknown;
}> {}

export class BadServerResponse extends Data.TaggedError("BadServerResponse")<{
  message: string;
}> {}

export type DataFailure = DataException | BadServerResponse | ParseError;

const Datum = Schema.Struct({
  xValue: Schema.Number,
  yValue: Schema.Number,
  category: Schema.String,
});

const getData = async (
  from: string,
  to: string
): Promise<Either.Either<ReadonlyArray<typeof Datum.Type>, DataFailure>> => {
  try {
    const res = await fetch(`/api/data?from=${from},to=${to}`);
    if (!res.ok) {
      return Either.left(
        new BadServerResponse({
          message: `Bad server response: ${res.statusText}`,
        })
      );
    }
    const data = await res.json();
    const parseResult = Schema.decodeUnknownEither(Schema.Array(Datum))(data);
    if (parseResult._tag === "Left") {
      return Either.left(parseResult.left);
    }

    return Either.right(parseResult.right);
  } catch (error) {
    return Either.left(
      new DataException({ message: "Unable to fetch data", reason: error })
    );
  }
};

const main = async () => {
  const result = await getData("2024", "2025");

  return Either.match(result, {
    onLeft: (_left) => console.log("Unable to get data"),
    onRight: (right) => {
      console.log("Data received", right);
    },
  });
};
