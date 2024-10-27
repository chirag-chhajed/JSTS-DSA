class Stack {
  constructor() {
    this.items = [];
  }
  push(element: T) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    this.items.length = 0;
  }
  size() {
    return this.items.length;
  }
}

//Function to check balanced parantheses
const checkBalancedParentheses = (str: string) => {
  //Create a stack
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "{" || str[i] == "(" || str[i] == "[") {
      stack.push(str[i]);
    }

    if (str[i] == "}" || str[i] == ")" || str[i] == "]") {
      //return false if stack is empty
      if (stack.isEmpty()) {
        return false;
      }

      //Pop an item from the stack and check if it matches the corresponding parentheses
      let temp = stack.pop();
      if (temp === "{" && str[i] !== "}") {
        return false;
      } else if (temp === "[" && str[i] !== "]") {
        return false;
      } else if (temp === "(" && str[i] !== ")") {
        return false;
      }
    }
  }
  //If stack is empty after traversing the string then return true
  if (stack.isEmpty()) {
    return true;
  }
  return false;
};

console.log(checkBalancedParentheses("[{}]"));
console.log(checkBalancedParentheses("[{}{}{}{]"));
console.log(checkBalancedParentheses("({[]}){}[][({})]"));
