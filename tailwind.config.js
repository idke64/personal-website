/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'dm-sans': ['DM Sans', 'sans-serif']
			},
			keyframes: {
				'gradient-text': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'spin-slow-1': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(-180deg)' }
				},
				'spin-slow-2': {
					from: { transform: 'rotate(-180deg)' },
					to: { transform: 'rotate(-360deg)' }
				},
				wiggle: {
					'0%': { transform: 'rotate(0deg)' },
					'17%': { transform: 'rotate(-9deg)' },
					'33%': { transform: 'rotate(0deg)' },
					'50%': { transform: 'rotate(9deg)' },
					'67%': { transform: 'rotate(0deg)' },
					'83%': { transform: 'rotate(-9deg)' },
					'100%': { transform: 'rotate(0deg)' }
				}
			},
			animation: {
				'gradient-text': 'gradient-text 12s infinite',
				'spin-slow-1': 'spin-slow-1 350ms ease-in',
				'spin-slow-2': 'spin-slow-2 350ms ease-out',
				wiggle: 'wiggle 625ms ease-in-out'
			},
			boxShadow: {
				DEFAULT: 'rgba(27, 27, 35, 0.12)  5px 5px 10px'
			},
			dropShadow: {
				DEFAULT: 'rgba(27, 27, 35, 0.12) 1.95px 1.95px 2.6px'
			},
			borderColor: {
				DEFAULT: 'rgba(var(--border))'
			},
			borderRadius: {
				DEFAULT: '8px',
				sm: '4px'
			},
			colors: {
				palette: {
					green: 'rgba(var(--palette-green))',
					cyan: 'rgba(var(--palette-cyan))',
					magenta: 'rgba(var(--palette-magenta))',
					purple: 'rgba(var(--palette-purple))',
					'cyan-dark': 'rgba(var(--palette-cyan-dark))',
					'cyan-light-1': 'rgba(var(--palette-cyan-light-1))',
					'cyan-light-2': 'rgba(var(--palette-cyan-light-2))'
				},
				themeicon: 'rgba(var(--themeicon))',
				border: 'rgba(var(--border))',
				bg: {
					1: 'rgba(var(--bg-1))',
					2: 'rgba(var(--bg-2))'
				},
				text: {
					1: 'rgba(var(--text-1))',
					2: 'rgba(var(--text-2))',
					3: 'rgba(var(--text-3))',
					4: 'rgba(var(--text-4))'
				}
			}
		}
	},
	plugins: []
};
