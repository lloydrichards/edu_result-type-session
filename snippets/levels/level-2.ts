import type { DataT } from "./domain";

// region types
type Left<T> = {
  _tag: "Left";
  left: T;
};

type Right<T> = {
  _tag: "Right";
  right: T;
};

type Either<L, R> = Left<L> | Right<R>;

const left = <L, R>(left: L): Either<L, R> => {
  return {
    _tag: "Left",
    left,
  };
};
const right = <L, R>(right: R): Either<L, R> => {
  return {
    _tag: "Right",
    right,
  };
};
// endregion types

// region snippet
const getData = async <T, E = Error>(
  from: string
): Promise<Either<E, T>> => {
  try {
    const url = `/api/data?from=${from}`;
    const res = await fetch(url);
    if (!res.ok) {
      return left(new Error(res.statusText) as E);
    }
    const data = (await res.json()) as T;
    return right(data);
  } catch (error) {
    return left(
      new Error("Unable to fetch data") as E
    );
  }
};
// endregion snippet

// region main
const fold = <L, R, A>(
  either: Either<L, R>,
  onLeft: (left: L) => A,
  onRight: (right: R) => A
): A =>
  either._tag === "Left"
    ? onLeft(either.left)
    : onRight(either.right);

const main = async () => {
  const result = await getData<DataT[]>("2024");
  return fold(
    result,
    (_left) => console.log("Unable to get data"),
    (right) => {
      console.log("Data received", right);
    }
  );
};
// endregion main
