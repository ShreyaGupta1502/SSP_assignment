class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    // Peek at the top element of the stack
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Check if an element is present in the stack
    contains(element) {
      return this.items.includes(element);
    }
  }
  
  // Example usage:
  var stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log("Is 20 present in the stack? ", stack.contains(20)); // Output: true
  console.log("Is 40 present in the stack? ", stack.contains(40)); // Output: false
  