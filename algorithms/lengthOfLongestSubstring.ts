function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  let hashMap = new Map<string, number>();
  let count = 0;
  const allCounts: number[] = [];
  for (const char of s) {
    const timesSeen = hashMap.get(char);
    if (timesSeen === undefined) {
      count++;
      hashMap.set(char, 1);
    } else {
      hashMap = new Map<string, number>();
      hashMap.set(char, 1);
      allCounts.push(count);
      count = 0;
      count++;
    }
  }
  if (allCounts.length === 0) return count;
  return Math.max(...allCounts);
}

lengthOfLongestSubstring(' ');
