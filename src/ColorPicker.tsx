import React from "react";
import { RgbaColorPicker } from "react-colorful";
import { nanoid } from "nanoid";

import "react-colorful/dist/index.css";
import "./colorful.css";

import { useStore } from "./context";
import { HexRgbaBox } from "./HexRgbaBox";
import { useClickOutside } from "./hooks";
import { rgb2bg } from "./utils";
import { Color, Rgba } from "./types";

export const ColorPicker = () => {
  const frameItStore = useStore();
  const { background, updateBackground } = frameItStore;
  const { selectedColor, swatches } = background;

  const popover = React.useRef<HTMLDivElement>(null);
  const [picker, togglePicker] = React.useState(false);

  const close = React.useCallback(() => togglePicker(false), []);
  useClickOutside(popover, close);

  return (
    <div className="inline-flex items-center">
      <label className="pb-1 pr-2 text-sm font-medium text-gray-500">
        Background Color
      </label>
      <div className="relative inline">
        <div
          className="inline-block w-10 h-6 rounded-md shadow-sm cursor-pointer"
          style={{
            background: rgb2bg(selectedColor.rgba)
          }}
          onClick={() => togglePicker(true)}
        />

        {picker && (
          <div
            className="absolute z-10 p-3 bg-white shadow-md -left-28"
            ref={popover}
          >
            <RgbaColorPicker
              className="custom-pointers"
              color={selectedColor.rgba}
              onChange={(rgba: Rgba) =>
                updateBackground({
                  selectedColor: {
                    id: nanoid(),
                    rgba
                  }
                })
              }
            />

            <div className="mt-2">
              <HexRgbaBox
                selectedColor={selectedColor}
                updateBackground={updateBackground}
              />
              {swatches.map((color: Color) => {
                return (
                  <div className="relative inline-block" key={color.id}>
                    <button
                      className="w-4 h-4 mb-2 mr-2 rounded shadow select-none"
                      style={{ background: rgb2bg(color.rgba) }}
                      onClick={() =>
                        updateBackground({
                          transparent: false,
                          selectedColor: color
                        })
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
