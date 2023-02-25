import React from "react"

import { useEventCallback } from "../hooks"

const hex6 = /^#?[0-9A-F]{6}$/i
const validHex = (color: string): boolean => hex6.test(color)

// Escapes all non-hexadecimal characters including "#"
const escapeNonHex = (hex: string) =>
	hex.replace(/([^0-9A-F]+)/gi, "").substr(0, 6)

type ComponentProps = {
	hex: string
	onChange: (newColor: string) => void
}

type InputProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	"onChange" | "value"
>

export const HexInput = ({
	hex = "",
	onChange,
	onBlur,
	...rest
}: Partial<InputProps & ComponentProps>) => {
	const [value, setValue] = React.useState(() => escapeNonHex(hex))
	const onChangeCallback = useEventCallback<string>(onChange)
	const onBlurCallback = useEventCallback<React.FocusEvent<HTMLInputElement>>(
		onBlur,
	)

	// Trigger `onChange` handler only if the input value is a valid HEX-color
	const handleChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const inputValue = escapeNonHex(e.target.value)
			setValue(inputValue)
			if (validHex(inputValue)) onChangeCallback("#" + inputValue)
		},
		[onChangeCallback],
	)

	// Take the color from props if the last typed color (in local state) is not valid
	const handleBlur = React.useCallback(
		(e: React.FocusEvent<HTMLInputElement>) => {
			if (!validHex(e.target.value)) setValue(escapeNonHex(hex))
			onBlurCallback(e)
		},
		[hex, onBlurCallback],
	)

	// Update the local state when `color` property value is changed
	React.useEffect(() => {
		setValue(escapeNonHex(hex))
	}, [hex])

	return (
		<input
			{...rest}
			value={value}
			spellCheck="false" // the element should not be checked for spelling errors
			onChange={handleChange}
			onBlur={handleBlur}
		/>
	)
}
