import React, { createContext, useContext } from "react";
import { selectedColor, colors } from "./constants";

import { Background, IStore } from "./types";
import { hex2rgb } from "./utils";

interface StoreContextValue {
  background: Background;
  updateBackground: (background: Partial<Background>) => void;
}

export const Context = createContext<StoreContextValue>({
  background: {
    selectedColor: {
      id: selectedColor.id,
      rgba: hex2rgb(selectedColor.hex)
    },
    swatches: colors.map((color) => ({
      id: color.id,
      rgba: hex2rgb(color.hex)
    }))
  },
  updateBackground: () => {}
});

export const useStore = () => useContext(Context);
