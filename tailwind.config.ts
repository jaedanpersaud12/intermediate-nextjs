import type { Config } from 'tailwindcss'
import type { PluginAPI } from 'tailwindcss/types/config'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			status: {
  				live: '#10b981',
  				draft: '#ffffff',
  				started: '#3b82f6',
  				ended: '#a855f7',
  				canceled: '#ef4444'
  			},
  			'accent-color': {
  				primary: '#1d4ed8',
  				secondary: '#9333ea',
  				success: '#10b981',
  				danger: '#ef4444',
  				warning: '#f59e0b',
  				info: '#3b82f6',
  				light: '#f3f4f6',
  				dark: '#111827'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		opacity: {
  			glass: '0.05',
  			'glass-hover': '0.15',
  			'glass-border': '0.1',
  			'glass-border-hover': '0.2'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			'glass-gradient': 'linear-gradient(to bottom, var(--glass-from), var(--glass-to))'
  		},
  		cssVariables: {
  			'--glass-from': 'rgba(255, 255, 255, 0.1)',
  			'--glass-to': 'rgba(255, 255, 255, 0.05)'
  		},
  		transitionDuration: {
  			hover: '300ms'
  		},
  		borderRadius: {
  			glass: '0.75rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontSize: {
  			status: [
  				'0.75rem',
  				{
  					lineHeight: '1rem',
  					letterSpacing: '0.05em'
  				}
  			]
  		}
  	}
  },
  darkMode: ['class', 'class'],
  plugins: [
    nextui(),
    function ({ addComponents, theme }: PluginAPI) {
      addComponents({
        '.glass-card': {
          '@apply relative overflow-hidden rounded-glass border transition-all duration-hover':
            {},
          background: `linear-gradient(to bottom, ${theme(
            'opacity.glass'
          )}, ${theme('opacity.glass-hover')})`,
          'border-color': `rgba(255, 255, 255, ${theme(
            'opacity.glass-border'
          )})`,
          '&:hover': {
            'border-color': `rgba(255, 255, 255, ${theme(
              'opacity.glass-border-hover'
            )})`,
            transform: 'translateY(-2px)',
          },
        },
        '.glass-container': {
          '@apply border backdrop-blur-sm': {},
          background: `rgba(255, 255, 255, ${theme('opacity.glass')})`,
          'border-color': `rgba(255, 255, 255, ${theme(
            'opacity.glass-border'
          )})`,
        },
        '.gradient-heading': {
          '@apply bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent font-bold':
            {},
        },
        '.status-bar': {
          '@apply absolute h-1.5 w-16': {},
          '&.top-left': {
            '@apply top-0 left-0 rounded-br': {},
          },
          '&.top-right': {
            '@apply top-0 right-0 rounded-bl': {},
          },
          '&.bottom-left': {
            '@apply bottom-0 left-0 rounded-tr': {},
          },
          '&.bottom-right': {
            '@apply bottom-0 right-0 rounded-tl': {},
          },
        },
        '.dot-indicator': {
          '@apply h-2 w-2 rounded-full': {},
        },
        '.card-accent': {
          '&::before': {
            '@apply content-[""] absolute h-[2px] w-16 transition-all duration-hover':
              {},
            background: 'var(--accent-color, theme("colors.secondary"))',
            opacity: '0.8',
          },
          '&.accent-top-left::before': {
            '@apply top-0 left-0 rounded-br': {},
          },
          '&.accent-top-right::before': {
            '@apply top-0 right-0 rounded-bl': {},
          },
          '&.accent-bottom-left::before': {
            '@apply bottom-0 left-0 rounded-tr': {},
          },
          '&.accent-bottom-right::before': {
            '@apply bottom-0 right-0 rounded-tl': {},
          },
          '&:hover::before': {
            '@apply w-24': {},
            opacity: '1',
          },
        },
      })
    },
      require("tailwindcss-animate")
],
}

export default config
