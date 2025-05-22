import type { DataT } from "./domain";

// Types for the result object with discriminated union
type Success<T> = {
  data: T;
  error: null;
};

type Failure<E> = {
  data: null;
  error: E;
};

type Result<T, E = Error> = Success<T> | Failure<E>;

// Main wrapper function
const tryCatch = async <T, E = Error>(
  promise: Promise<T>
): Promise<Result<T, E>> => {
  try {
    const data = await promise;
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error as E };
  }
};

const getData = async <T>(from: string, to: string) => {
  const res = await fetch(`/api/data?from=${from},to=${to}`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json() as T;
};

const main = async () => {
  const result = await tryCatch(getData<DataT[]>("2024", "2025"));
  if (result.error) {
    console.log("Unable to get data");
    return;
  }
  const data = result.data;
};
