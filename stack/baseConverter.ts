function baseConverter(n: number, b: number) {
  let rem: number;
  let convertedString = "";
  const digits = "0123456789ABCDEF";

  while (n > 0) {
    rem = Math.floor(n % b);
    convertedString = digits[rem] + convertedString;
    n = Math.floor(n / b);
  }

  return convertedString;
}

console.log(baseConverter(1021313, 16));

/*

Sure! Let's take an example and walk through the function step by step.

### Example: Convert 255 to base 16 (hexadecimal).

1. **Initial Values:**
   - `n = 255` (the number we want to convert).
   - `b = 16` (we want to convert it to base 16).
   - `digits = '0123456789ABCDEF'` (lookup for digits).
   - `convertedString = ''` (initially an empty string that will hold the result).

2. **Step-by-Step Execution of the `while` loop:**

   **Iteration 1:**
   - **Remainder Calculation (`n % b`):**
     - `rem = Math.floor(255 % 16) = 15`.
     - `rem` is `15`. Looking at `digits[15]`, we get `F`.
   - **Update `convertedString`:**
     - `convertedString = digits[15] + convertedString = 'F' + '' = 'F'`.
   - **Update `n`:**
     - `n = Math.floor(255 / 16) = Math.floor(15.9375) = 15`.

   **Iteration 2:**
   - **Remainder Calculation (`n % b`):**
     - `rem = Math.floor(15 % 16) = 15`.
     - `rem` is `15` again. Looking at `digits[15]`, we get `F`.
   - **Update `convertedString`:**
     - `convertedString = digits[15] + convertedString = 'F' + 'F' = 'FF'`.
   - **Update `n`:**
     - `n = Math.floor(15 / 16) = Math.floor(0.9375) = 0`.

3. **End of Loop:**
   - The loop stops because `n = 0`. The final value of `convertedString` is `'FF'`.

4. **Return the Result:**
   - The function returns `'FF'`, which is the hexadecimal representation of 255.

### Summary of Each Iteration:

| Iteration | `n`   | `n % b` (remainder) | `digits[remainder]` | `convertedString` | `n / b` (new `n`) |
|-----------|-------|---------------------|---------------------|-------------------|-------------------|
| 1         | 255   | 15                  | F                   | F                 | 15                |
| 2         | 15    | 15                  | F                   | FF                | 0                 |

### Final Result:
The final converted value is `'FF'`, which is the hexadecimal representation of the number `255`.

### Explanation Recap:
- Each iteration, we take the remainder of dividing `n` by `b` (base 16 in this case), find the corresponding character in the `digits` string, and prepend it to `convertedString`.
- We divide `n` by `b` each time and repeat the process until `n` becomes 0.

Let me know if you'd like more clarification!

**/
