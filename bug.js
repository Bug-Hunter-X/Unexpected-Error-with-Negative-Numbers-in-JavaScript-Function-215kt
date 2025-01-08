function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct handling of 0,0
  }
  if (a === 0) {
    return b; // Correct handling of 0,b
  }
  if (b === 0) {
    return a; // Correct handling of a,0
  }
  // The bug is here: It assumes that a and b are always positive.
  if (a < 0 || b < 0) {
    throw new Error("Negative numbers not supported");
  }
  return a + b;
}

console.log(foo(0, 0)); // 0
console.log(foo(5, 0)); // 5
console.log(foo(0, 5)); // 5
console.log(foo(5, 5)); // 10
console.log(foo(-5, 5)); // Error: Negative numbers not supported