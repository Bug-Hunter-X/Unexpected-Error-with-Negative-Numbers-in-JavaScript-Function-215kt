# Unexpected Error with Negative Numbers in JavaScript Function

This repository demonstrates a common error in JavaScript functions that involve numerical operations. The `foo` function is designed to add two numbers but unexpectedly throws an error when either input is negative.

## Bug Description
The provided JavaScript function `foo` fails when negative numbers are passed as arguments. The function incorrectly assumes that both inputs `a` and `b` will always be positive and throws an error when a negative number is encountered.

## Solution
The solution involves modifying the function to correctly handle negative numbers by simply extending the return statements to accommodate negative number inputs without throwing an error.

## How to Reproduce
Clone the repository and run `bug.js` in a JavaScript environment like Node.js.  You'll observe the error when you call `foo` with negative arguments. Then, run `bugSolution.js` to see how the bug is resolved.
