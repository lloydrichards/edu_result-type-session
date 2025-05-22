import type { DataT } from "./domain";

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

const getData = async <T, E = Error>(
  from: string,
  to: string
): Promise<Either<E, T>> => {
  try {
    const res = await fetch(`/api/data?from=${from},to=${to}`);
    if (!res.ok) {
      return left(new Error(res.statusText) as E);
    }
    const data = (await res.json()) as T;
    return right(data);
  } catch (error) {
    return left(new Error("Unable to fetch data") as E);
  }
};

const fold = <L, R, A>(
  either: Either<L, R>,
  onLeft: (left: L) => A,
  onRight: (right: R) => A
): A => {
  if (either._tag === "Left") {
    return onLeft(either.left);
  } else {
    return onRight(either.right);
  }
};

const main = async () => {
  const result = await getData<DataT[]>("2024", "2025");

  return fold(
    result,
    (_left) => console.log("Unable to get data"),
    (right) => {
      console.log("Data received", right);
    }
  );
};
