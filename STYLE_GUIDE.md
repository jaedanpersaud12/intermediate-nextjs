# Dark Mode Glassmorphic Design System

A modern, dark-mode first design system featuring glassmorphic effects, subtle animations, and consistent visual hierarchy.

## Colors

### Status Colors

```css
status: {
  live: '#10b981'    /* emerald-500 */
  draft: '#ffffff'    /* white */
  started: '#3b82f6'  /* blue-500 */
  ended: '#a855f7'    /* purple-500 */
  canceled: '#ef4444' /* red-500 */
}
```

### Accent Colors

```css
accent-color: {
  primary: '#1d4ed8'   /* blue-700 */
  secondary: '#9333ea' /* purple-600 */
  success: '#10b981'   /* emerald-500 */
  danger: '#ef4444'    /* red-500 */
  warning: '#f59e0b'   /* amber-500 */
  info: '#3b82f6'      /* blue-500 */
  light: '#f3f4f6'     /* gray-100 */
  dark: '#111827'      /* gray-900 */
}
```

## Typography

### Text Styles

- Primary Text: `text-white`
- Secondary Text: `text-white/80`
- Muted Text: `text-white/60`
- Disabled Text: `text-white/40`

### Special Text

```css
.text-status {
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.05em;
}

.gradient-heading {
  @apply bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent font-bold;
}
```

## Components

### Glass Card

```jsx
<div className="glass-card">
  {/* Base glass card with hover effects */}
}
```

Properties:

- Rounded corners (0.75rem)
- Subtle gradient background
- Hover elevation (-2px transform)
- Border opacity transitions
- Overflow hidden for status bars

### Glass Container

```jsx
<div className="glass-container">
  {/* Simpler glass effect for containers */}
}
```

Properties:

- Backdrop blur
- Semi-transparent background
- Subtle border

### Status Indicators

#### Status Bars

```jsx
<div className="status-bar top-left" />   {/* Primary corner bar */}
<div className="status-bar top-right" />  {/* Secondary corner bar */}
```

Positions:

- `top-left`: Rounded bottom-right corner
- `top-right`: Rounded bottom-left corner
- `bottom-left`: Rounded top-right corner
- `bottom-right`: Rounded top-left corner

#### Dot Indicators

```jsx
<div className="dot-indicator" /> {/* Small circular indicator */}
```

Properties:

- 8px x 8px (h-2 w-2)
- Fully rounded
- Used for RSVP status

### Card Accents

```jsx
<div className="card-accent accent-top-left">
  {/* Card with animated accent line */}
}
```

Features:

- Animated width on hover (64px → 96px)
- Opacity transition (0.8 → 1)
- Custom colors via CSS variables
- Multiple positions available

## Glass Effects

### Opacity Levels

```css
opacity: {
  glass: '0.05',
  'glass-hover': '0.15',
  'glass-border': '0.1',
  'glass-border-hover': '0.2'
}
```

### Gradients

```css
background-image: {
  'glass-gradient': 'linear-gradient(to bottom, var(--glass-from), var(--glass-to))'
}
```

## Animations

### Transitions

- Duration: 300ms
- Properties: transform, opacity, width, background-color
- Smooth easing for hover effects

### Hover States

- Cards: Slight elevation (-2px Y transform)
- Accent lines: Width extension
- Text: Opacity adjustments
- Status bars: Maintain position

## Usage Examples

### Event Card

```jsx
<Link
  className="glass-card card-accent accent-top-left"
  style={{ '--accent-color': `var(--status-${status})` }}
>
  <div className="status-bar top-left bg-status-${status}" />
  <div className="status-bar top-right bg-status-${status} opacity-50" />

  {/* Content */}
  <h3 className="font-medium text-white group-hover:text-white/90">{title}</h3>

  {/* Indicators */}
  <div className="dot-indicator bg-emerald-500" />

  {/* Status */}
  <span className="text-status uppercase text-white/60">{status}</span>
</Link>
```

### Empty State

```jsx
<div className="glass-container rounded-glass p-8 text-center">
  <Icon className="mx-auto h-12 w-12 text-white/25" />
  <h3 className="text-lg font-medium text-white/80">{title}</h3>
  <p className="mt-2 text-sm text-white/60">{description}</p>
</div>
```
