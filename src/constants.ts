import { nanoid } from "nanoid"

export const regex0to1 = /^(0+\.?|0*\.\d+|0*1(\.0*)?)$/
export const regex0to255 = /^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/

export const selectedColor = { id: nanoid(), hex: "#D9E3F0" }

export const colors = [
	{ id: nanoid(), hex: "#E91E63" },
	{ id: nanoid(), hex: "#FF8A65" },
	{ id: nanoid(), hex: "#F8E71C" },
	{ id: nanoid(), hex: "#697689" },
	{ id: nanoid(), hex: "#37D67A" },
	{ id: nanoid(), hex: "#D9E3F0" },
	{ id: nanoid(), hex: "#BD10E0" },
	{ id: nanoid(), hex: "#9013FE" },
	{ id: nanoid(), hex: "#4A90E2" },
	{ id: nanoid(), hex: "#50E3C2" },
	{ id: nanoid(), hex: "#000000" },
	{ id: nanoid(), hex: "#4A4A4A" },
	{ id: nanoid(), hex: "#FFFFFF" },
]
