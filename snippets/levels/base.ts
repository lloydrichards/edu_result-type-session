import type { DataT } from "./domain";

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
  const data = await getData<DataT[]>("2024");
};
// endregion snippet
