import shuffle from "./shuffleArray";

export default function generateRandomSubsetOfIndices(lastIndex, targetSize) {
  const indices = Array(lastIndex + 1).map((_, index) => index);
  shuffle(indices);
  return indices.slice(0, targetSize);
}
