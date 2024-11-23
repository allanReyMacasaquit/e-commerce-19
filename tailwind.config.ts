import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))',
				},
				// Define the light-blue color scheme
				'light-blue': {
					DEFAULT: '#ADD8E6', // Light blue
					darker: '#5B9BD5', // Darker variant
					lighter: '#E0F7FA', // Lighter variant
					foreground: '#003B73', // Text color
					hover: '#A5CBE4', // Hover effect
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		function ({ addComponents }: PluginAPI) {
			addComponents({
				'.btn-default': {
					backgroundColor: '#3489e4', // Custom blue (lighter than default)
					color: '#FFFFFF', // White text
					padding: '0.5rem 1rem',
					borderRadius: '0.375rem',
					fontWeight: '600',
					'&:hover': {
						backgroundColor: '#276cb8', // Slightly darker custom blue for hover
					},
				},
				'.btn-destructive': {
					backgroundColor: '#e45353', // Custom soft red
					color: '#FFFFFF', // White text
					padding: '0.5rem 1rem',
					borderRadius: '0.375rem',
					fontWeight: '600',
					'&:hover': {
						backgroundColor: '#c44242', // Slightly darker custom red for hover
					},
				},
				'.btn-ghost': {
					backgroundColor: 'transparent', // No background
					color: '#7b8c99', // Custom gray-blue for text
					padding: '0.5rem 1rem',
					border: '1px solid #7b8c99', // Custom gray-blue border
					borderRadius: '0.375rem',
					fontWeight: '600',
					'&:hover': {
						backgroundColor: '#eef3f6', // Very light gray-blue background on hover
					},
				},
				'.btn-link': {
					backgroundColor: 'transparent', // No background
					color: '#3489e4', // Custom blue for text
					textDecoration: 'underline',
					fontWeight: '600',
					'&:hover': {
						color: '#ffffff', // Slightly darker custom blue for hover
					},
				},
				'.btn-outline': {
					backgroundColor: 'transparent',
					border: '2px solid #3489e4', // Custom blue border
					color: '#3489e4', // Custom blue text
					padding: '0.5rem 1rem',
					borderRadius: '0.375rem',
					fontWeight: '600',
					'&:hover': {
						backgroundColor: '#f2f2f2', // Filled custom blue background on hover
					},
				},
				'.btn-secondary': {
					backgroundColor: '#b0c5d8', // Custom soft gray-blue
					color: '#FFFFFF', // White text
					padding: '0.5rem 1rem',
					borderRadius: '0.375rem',
					fontWeight: '600',
					'&:hover': {
						backgroundColor: '#97aec3', // Slightly darker gray-blue for hover
					},
				},
			});
			addComponents({
				'.bg-brand': {
					backgroundColor: '#3489e4', // Original brand color
					color: '#FFFFFF', // White text for contrast
					padding: '1rem', // Standard padding
					borderRadius: '0.375rem', // Rounded corners
					fontWeight: '600', // Bold text
				},
				'.bg-brand-light': {
					backgroundColor: '#69a9e7', // Lightened brand color
					color: '#FFFFFF', // White text for contrast
					padding: '1rem',
					borderRadius: '0.375rem',
					fontWeight: '600',
				},
				'.bg-brand-dark': {
					backgroundColor: '#1f5f91', // Darkened brand color
					color: '#FFFFFF', // White text for contrast
					padding: '1rem',
					borderRadius: '0.375rem',
					fontWeight: '600',
				},
			});
		},
	],
} satisfies Config;
