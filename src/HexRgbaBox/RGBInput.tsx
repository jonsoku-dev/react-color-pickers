import React from "react";

import { regex0to255 } from "../constants";
import { useEventCallback } from "../hooks";

const escapeRGB = (rgb: string) => rgb.replace(/^[^\d]$/gi, "");
const validRGB = (rgb: string) => regex0to255.test(rgb);

type RGBProps = {
  rgb: string;
  onChange: (value: string) => void;
  onBlur?: (value: React.FocusEvent<HTMLInputElement>) => void;
};

type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "rgb" | "onChange" | "onBlur"
>;

export const RGBInput = ({
  rgb = "",
  onChange,
  onBlur,
  ...rest
}: RGBProps & InputProps) => {
  const [value, setValue] = React.useState(() => escapeRGB(rgb));
  const onChangeCallback = useEventCallback<string>(onChange);
  const onBlurCallback = useEventCallback<React.FocusEvent<HTMLInputElement>>(
    onBlur
  );

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = escapeRGB(e.target.value);
      setValue(inputValue);
      if (validRGB(inputValue)) onChangeCallback(inputValue);
    },
    [onChangeCallback]
  );

  const handleBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (!validRGB(e.target.value)) setValue(escapeRGB(rgb));
      onBlurCallback(e);
    },
    [rgb, onBlurCallback]
  );

  React.useEffect(() => {
    setValue(escapeRGB(rgb));
  }, [rgb]);

  return (
    <input
      {...rest}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};
