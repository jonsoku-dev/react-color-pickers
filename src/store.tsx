import React, { useState } from "react";
import { hex2rgb } from "./utils";
import { selectedColor, colors } from "./constants";
import { Background } from "./types";
import { Context } from "./context";

export const StoreProvider: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  const [background, setBackground] = useState<Background>({
    selectedColor: {
      id: selectedColor.id,
      rgba: hex2rgb(selectedColor.hex)
    },
    swatches: colors.map((color) => ({
      id: color.id,
      rgba: hex2rgb(color.hex)
    }))
  });

  const updateBackground = (newBackground: Partial<Background>) => {
    setBackground((prevBackground) => ({
      ...prevBackground,
      ...newBackground
    }));
  };

  const store = {
    background,
    updateBackground
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
