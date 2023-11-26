function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let c of s) {
    const top = stack.length - 1;
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c);
    } else if (
      (c === ')' && stack[top] === '(') ||
      (c === '}' && stack[top] === '{') ||
      (c === ']' && stack[top] === '[')
    ) {
      if (stack.length !== 0) stack.pop();
    } else {
      return false;
    }
  }
  if (stack.length !== 0) return false;
  return true;
}
