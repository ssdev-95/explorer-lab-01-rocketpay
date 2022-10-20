/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.vue', './index.html'],
  theme: {
    extend: {
			screens: {
				mb: { 'max': '869px' },
				md: { 'min': '869px' }
			},
			colors: {
				gray: {
					'900': '#121214'
				}
			},
			backgroundImage: {
				'glass': 'linear-gradient(-45deg, transparent, #ffffff40)',
				'load': 'linear-gradient(90deg, #121214, transparent 90%)'
			}
		},
  },
  plugins: [],
}
