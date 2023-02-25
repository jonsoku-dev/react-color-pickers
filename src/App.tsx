import * as React from "react";
import { ColorPicker } from "./ColorPicker";
import { StoreProvider } from "./store";

export default function App() {
  return (
    <StoreProvider>
      <div className="w-full">
        <h1 className="text-4xl text-gray-700">Sketch Picker</h1>
        <ColorPicker />
      </div>
    </StoreProvider>
  );
}
