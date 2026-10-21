/** Returns the index of the position closest to the value; the first one wins a tie, and an empty list gives 0. */
export default function nearestIndex(
  positions: number[],
  value: number,
): number {
  let bestIndex = 0;

  for (const [index, position] of positions.entries()) {
    const bestPosition = positions[bestIndex] ?? 0;

    if (Math.abs(position - value) < Math.abs(bestPosition - value)) {
      bestIndex = index;
    }
  }

  return bestIndex;
}
