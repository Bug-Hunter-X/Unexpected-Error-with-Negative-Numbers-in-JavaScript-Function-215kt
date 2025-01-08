function foo(a, b) {
  // Handle cases for 0 inputs correctly
  if (a === 0 && b === 0) {
    return 0; 
  }
  if (a === 0) {
    return b; 
  }
  if (b === 0) {
    return a; 
  }
  // Correct handling of negative numbers
  return a + b;
}

console.log(foo(0, 0)); // 0
console.log(foo(5, 0)); // 5
console.log(foo(0, 5)); // 5
console.log(foo(5, 5)); // 10
console.log(foo(-5, 5)); // 0
console.log(foo(5, -5)); // 0
console.log(foo(-5,-5)); // -10