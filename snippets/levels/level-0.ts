import type { DataT } from "./domain";

// region snippet
const getData = async <T>(from: string) => {
  try {
    const url = `/api/data?from=${from}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return (await res.json()) as T;
  } catch (error) {
    console.error(error);
    return [] as T;
  }
};

const main = async () => {
  const data = await getData<DataT[]>("2024");
};
// endregion snippet
