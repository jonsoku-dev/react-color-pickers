import React from "react";

import { hex2rgb, rgb2hex } from "../utils";
import { Color, Background } from "../types";
import { HexInput } from "./HexInput";
import { RGBInput } from "./RGBInput";
import { AlphaInput } from "./AlphaInput";

type HexRgbaBoxProps = {
  selectedColor: Color;
  updateBackground: ({ selectedColor, swatches }: Partial<Background>) => void;
};

export const HexRgbaBox = ({
  selectedColor,
  updateBackground
}: HexRgbaBoxProps) => {
  return (
    <div className="flex mt-1 mb-2">
      <div className="flex flex-col-reverse items-center flex-1">
        <label className="select-none text-gray-500 text-sm">HEX</label>
        <HexInput
          className="w-12 text-gray-500 text-sm"
          hex={rgb2hex(selectedColor.rgba)}
          onChange={(value: string) => {
            updateBackground({
              selectedColor: {
                ...selectedColor,
                rgba: hex2rgb(value)
              }
            });
          }}
        />
      </div>
      <div className="flex flex-col-reverse items-center flex-1">
        <label className="select-none text-gray-500 text-sm">R</label>
        <RGBInput
          className="w-6 text-center text-gray-500 text-sm"
          rgb={String(selectedColor.rgba.r)}
          onChange={(value: string) => {
            updateBackground({
              selectedColor: {
                ...selectedColor,
                rgba: {
                  ...selectedColor.rgba,
                  r: Number(value)
                }
              }
            });
          }}
        />
      </div>
      <div className="flex flex-col-reverse items-center flex-1">
        <label className="select-none text-gray-500 text-sm">G</label>
        <RGBInput
          className="w-6 text-center text-gray-500 text-sm"
          rgb={String(selectedColor.rgba.g)}
          onChange={(value: string) => {
            updateBackground({
              selectedColor: {
                ...selectedColor,
                rgba: {
                  ...selectedColor.rgba,
                  g: Number(value)
                }
              }
            });
          }}
        />
      </div>
      <div className="flex flex-col-reverse items-center flex-1">
        <label className="select-none text-gray-500 text-sm">B</label>
        <RGBInput
          className="w-6 text-center text-gray-500 text-sm"
          rgb={String(selectedColor.rgba.b)}
          onChange={(value: string) => {
            updateBackground({
              selectedColor: {
                ...selectedColor,
                rgba: {
                  ...selectedColor.rgba,
                  b: Number(value)
                }
              }
            });
          }}
        />
      </div>
      <div className="flex flex-col-reverse items-center flex-1">
        <label className="select-none text-gray-500 text-sm">A</label>
        <AlphaInput
          className="w-7 text-center text-gray-500 text-sm"
          alpha={String(selectedColor.rgba.a)}
          onChange={(value: string) => {
            updateBackground({
              selectedColor: {
                ...selectedColor,
                rgba: {
                  ...selectedColor.rgba,
                  a: Number(value)
                }
              }
            });
          }}
        />
      </div>
    </div>
  );
};
