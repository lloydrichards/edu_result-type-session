import type { DataT } from "./domain";

// region helpers
type Success<T> = {
  data: T;
  error: null;
};

type Failure<E> = {
  data: null;
  error: E;
};

type Result<T, E = Error> =
  | Success<T>
  | Failure<E>;

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
// endregion helpers

// region snippet
const getData = async <T>(from: string) => {
  const url = `/api/data?from=${from}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return (await res.json()) as T;
};

const main = async () => {
  const result = await tryCatch(
    getData<DataT[]>("2024")
  );
  if (result.error) {
    console.log("Unable to get data");
    return;
  }
  const data = result.data;
};
// endregion snippet
