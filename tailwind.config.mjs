/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#2985DE",
				secondary: "#B0E0FF",
				tertiary: '#9FB0BF',
				quaternary: '#7E8890',
			},
			fontFamily: {
				tajawal: "'Tajawal', sans-serif;"
			},
			boxShadow: {
				'3xl': '0 25px 60px -5px rgba(0, 0, 0, 0.35)',
			  }
		},
	},
	plugins: [require('tailwindcss-animated')],
}
