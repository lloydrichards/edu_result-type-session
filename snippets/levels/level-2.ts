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

const left = <L>(l: L): Left<L> => ({
  _tag: "Left",
  left: l,
});
const right = <R>(r: R): Right<R> => ({
  _tag: "Right",
  right: r,
});
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

class BigError extends Error {
  _tag = "BigError" as const;
}
class SmallError extends Error {
  _tag = "SmallError" as const;
}

type ExtractLeft<T> =
  T extends Left<infer L> ? L : never;
type ExtractRight<T> =
  T extends Right<infer R> ? R : never;

const runPromise = async <
  T extends Left<any> | Right<any>,
>(
  promise: Promise<T>
): Promise<
  Either<ExtractLeft<T>, ExtractRight<T>>
> => promise;

const runSync = <
  T extends Left<any> | Right<any>,
>(
  fn: T
): Either<ExtractLeft<T>, ExtractRight<T>> => fn;

const number = () => {
  const rand = Math.random();
  if (rand > 0.5) return left(new BigError());
  if (rand > 0.25) return left(new SmallError());
  return right(42);
};

const getMoreData = async (from: string) => {
  try {
    const url = `/api/data?from=${from}`;
    const res = await fetch(url);
    if (!res.ok) {
      return left(new SmallError(res.statusText));
    }
    const data = await res.json();
    return right(data);
  } catch (error) {
    return left(
      new BigError("Unable to fetch data")
    );
  }
};

const result = runPromise(getMoreData("2024"));
//      ^?
const result2 = runSync(number());
//      ^?
