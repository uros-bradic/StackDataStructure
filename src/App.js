import React from "react";
import "./styles.css";
import Stack from "./components/Stack";

export default function App() {
  return (
    <div className="App">
      <h1>Stack data structures</h1>
      <div>
        <p>
          Stack is a linear data structure which follows a particular order in
          which the operations are performed. The order may be LIFO(Last In
          First Out) or FILO(First In Last Out). Mainly the following three
          basic operations are performed in the stack:
        </p>
        <ul>
          <li>
            Push: Adds an item in the stack. If the stack is full, then it is
            said to be an Overflow condition.
          </li>
          <li>
            Pop: Removes an item from the stack. The items are popped in the
            reversed order in which they are pushed. If the stack is empty, then
            it is said to be an Underflow condition.
          </li>
          <li>Peek or Top: Returns top element of stack.</li>
          <li>isEmpty: Returns true if stack is empty, else false.</li>
        </ul>
      </div>
      <Stack />
      <img
        alt="Stack"
        src="https://www.geeksforgeeks.org/wp-content/uploads/gq/2013/03/stack.png"
      />
    </div>
  );
}
