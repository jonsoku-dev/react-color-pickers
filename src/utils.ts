import hexRgb from "hex-rgb"
import rgbHex from "rgb-hex"

import { Rgba } from "./types"

export const rgb2hex = (color: Rgba) => {
	const { r, g, b, a } = color
	const rgba = `rgba(${r},${g},${b},${a})`
	return `#${rgbHex(rgba)}`
}

export const hex2rgb = (color: string) => {
	const { red: r, green: g, blue: b, alpha: a } = hexRgb(color)
	return { r, g, b, a }
}

export const rgb2bg = (color: Rgba) => {
	const { r, g, b, a } = color
	return `rgba(${r},${g},${b},${a})`
}
