import type { DataT } from "./domain";

// region snippet
const getData = async <T>(from: string, to: string) => {
  const res = await fetch(`/api/data?from=${from},to=${to}`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return (await res.json()) as T;
};

const main = async () => {
  const data = await getData<DataT[]>("2024", "2025");
};
// endregion snippet
