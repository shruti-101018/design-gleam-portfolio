
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				pink: {
					light: '#FFD1DC',
					DEFAULT: '#FFC0CB',
					dark: '#FF9AA2'
				},
				mint: {
					light: '#C1F0E9',
					DEFAULT: '#A3E4D7',
					dark: '#76D7C4'
				},
				lavender: {
					light: '#E6E6FA',
					DEFAULT: '#D8BFD8',
					dark: '#C8A2C8'
				},
				cream: {
					light: '#FFF9E6',
					DEFAULT: '#FFF5D6',
					dark: '#FFF0C6'
				},
				peach: {
					light: '#FDE1D3',
					DEFAULT: '#FEC6A1',
					dark: '#F8B88B'
				},
				skyblue: {
					light: '#D3E4FD',
					DEFAULT: '#B5D3FF',
					dark: '#89BBFF'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
				mono: ['Roboto Mono', 'monospace']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'text-reveal': {
					'0%': { 
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'bounce-soft': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-up': 'fade-up 0.6s ease-out',
				'fade-up-delay-1': 'fade-up 0.6s ease-out 0.1s forwards',
				'fade-up-delay-2': 'fade-up 0.6s ease-out 0.2s forwards',
				'fade-up-delay-3': 'fade-up 0.6s ease-out 0.3s forwards',
				'fade-up-delay-4': 'fade-up 0.6s ease-out 0.4s forwards',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'text-reveal': 'text-reveal 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards',
				'text-reveal-delay-1': 'text-reveal 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s forwards',
				'text-reveal-delay-2': 'text-reveal 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s forwards',
				'text-reveal-delay-3': 'text-reveal 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s forwards',
				'gradient-shift': 'gradient-shift 5s ease infinite',
				'bounce-soft': 'bounce-soft 5s ease-in-out infinite',
				'spin-slow': 'spin-slow 10s linear infinite',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-pastel': 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
				'gradient-candy': 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
				'gradient-sky': 'linear-gradient(to top, #accbee 0%, #e7f0fd 100%)',
				'gradient-warm': 'linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
} satisfies Config;
