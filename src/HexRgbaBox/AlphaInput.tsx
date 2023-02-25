import React from "react";

import { regex0to1 } from "../constants";
import { useEventCallback } from "../hooks";

const escapeAlpha = (alpha: string) => alpha.replace(/^[^\d(\.\d+)?]$/gi, "");
const validAlpha = (alpha: string) => regex0to1.test(alpha);

type AlphaProps = {
  alpha: string;
  onChange: (value: string) => void;
  onBlur?: (value: React.FocusEvent<HTMLInputElement>) => void;
};

type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "alpha" | "onChange" | "onBlur"
>;

export const AlphaInput = ({
  alpha = "",
  onChange,
  onBlur,
  ...rest
}: AlphaProps & InputProps) => {
  const [value, setValue] = React.useState(() => escapeAlpha(alpha));
  const onChangeCallback = useEventCallback<string>(onChange);
  const onBlurCallback = useEventCallback<React.FocusEvent<HTMLInputElement>>(
    onBlur
  );

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = escapeAlpha(e.target.value);
      setValue(inputValue);
      if (validAlpha(inputValue)) onChangeCallback(inputValue);
    },
    [onChangeCallback]
  );

  const handleBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (!validAlpha(e.target.value)) setValue(escapeAlpha(alpha));
      onBlurCallback(e);
    },
    [alpha, onBlurCallback]
  );

  React.useEffect(() => {
    setValue(escapeAlpha(alpha));
  }, [alpha]);

  return (
    <input
      {...rest}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};
