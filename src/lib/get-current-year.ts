import { cacheLife } from "next/cache";

// Cached per day, so prerendered pages keep a static shell and still roll over to a new year without a rebuild
export default async function getCurrentYear(): Promise<number> {
  "use cache";
  cacheLife("days");

  return new Date().getFullYear();
}
