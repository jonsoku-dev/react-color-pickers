const colors = require("tailwindcss/colors")

module.exports = {
	purge: ["./src/**/*.{ts,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"blue-gray": colors.blueGray,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
