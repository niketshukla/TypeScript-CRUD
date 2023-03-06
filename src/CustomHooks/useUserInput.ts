// useInputHandler.ts
import { useState } from "react";

// Define the types for the input and output values
type InputHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;
type InputState = [string, InputHandler];

// Define the custom hook function
export function useInputHandler(initialValue: string): InputState {
  // Use state to store the input value
  const [value, setValue] = useState(initialValue);

  // Define a handler function that updates the state with the input value
  const handler: InputHandler = (e) => {
    setValue(e.target.value);
  };

  // Return the state and the handler as a tuple
  return [value, handler];
}
