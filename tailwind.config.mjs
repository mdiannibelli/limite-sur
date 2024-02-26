/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#2985DE",
				secondary: "#B0E0FF",
				tertiary: '#9FB0BF'
			},
			fontFamily: {
				tajawal: "'Tajawal', sans-serif;",
				josefin: "'Josefin Slab Variable', serif;"
			},
		},
	},
	plugins: [require('tailwindcss-animated')],
}
