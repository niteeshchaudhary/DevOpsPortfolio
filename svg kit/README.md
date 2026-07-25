# DevOps SVG Kit

A consistent, animation-ready SVG design system for DevOps and infrastructure visualization.

## 📐 Design System

### Canvas Sizes
- **64x64** - Default, compact icons
- **128x128** - Medium detail
- **256x256** - High detail

### Stroke
- **Width**: 2px
- **Joins**: Rounded
- **Caps**: Rounded

### Corners
- **8px radius** - Small elements
- **16px radius** - Medium elements
- **24px radius** - Large elements

### Colors

#### Metal Gradient (All metallic objects)
```
Top:    #4D5664
Middle: #343B46
Bottom: #1D232C
```

#### Pipe Glass
- Color: `#00A6D6`
- Opacity: 40%
- Inner glow enabled

#### Water
- Color: `#00D5FF`
- Animated flow

#### Warning Lights
- **Green**: `#44FF44`
- **Amber**: `#FFAA00`
- **Red**: `#FF4444`

### Shadows
Single shadow system used consistently across all assets:
- Offset: (0, 4)
- Blur: 4px
- Opacity: 30%

### Bolts
Every machine uses identical:
- Bolt size
- Shadow treatment
- Spacing

## 📁 Structure

```
svg kit/
├── defs/
│   ├── defs.svg           # Master definitions file
│   ├── metalGradient.svg
│   ├── glassGradient.svg
│   ├── cyanGlow.svg
│   ├── redGlow.svg
│   ├── greenGlow.svg
│   ├── bolt.svg
│   ├── shadow.svg
│   ├── highlight.svg
│   └── noise.svg
├── pipes/
│   ├── pipe_straight.svg
│   ├── pipe_vertical.svg
│   ├── pipe_horizontal.svg
│   ├── pipe_cross.svg
│   ├── pipe_t.svg
│   ├── pipe_valve.svg
│   ├── pipe_pressure.svg
│   ├── pipe_broken.svg
│   ├── pipe_leak.svg
│   └── pipe_repair.svg
├── factory/
│   ├── conveyor.svg
│   ├── motor.svg
│   ├── gear.svg
│   ├── hydraulic.svg
│   ├── robot_arm.svg
│   ├── press.svg
│   ├── furnace.svg
│   └── welder.svg
├── serverroom/
│   ├── server_rack.svg
│   ├── switch.svg
│   ├── router.svg
│   ├── monitor.svg
│   ├── terminal.svg
│   ├── fan.svg
│   └── cable.svg
├── kubernetes/
│   ├── harbor.svg
│   ├── container.svg
│   ├── ship.svg
│   ├── dock.svg
│   ├── crane.svg
│   └── bridge.svg
├── monitoring/
│   ├── screen.svg
│   ├── dashboard.svg
│   ├── gauge.svg
│   ├── alarm.svg
│   ├── light.svg
│   └── tower.svg
└── database/
    ├── tank.svg
    ├── pipe.svg
    ├── pump.svg
    ├── valve.svg
    └── backup_tank.svg
```

## 🎯 Layer System

Every asset is layered for animation:

### Example: Pipe
```svg
<g id="metal">...</g>    <!-- Pipe body -->
<g id="glass">...</g>    <!-- Glass window -->
<g id="water">...</g>    <!-- Flowing water -->
<g id="bolts">...</g>    <!-- Mounting bolts -->
<g id="shadow">...</g>   <!-- Drop shadow -->
<g id="highlight">...</g><!-- Surface highlight -->
```

## ⚡ Animation Ready

Assets are designed for GSAP animation:

```javascript
// Animate water flow
gsap.to("#water", {
  x: 150,
  repeat: -1,
  duration: 2
});

// Rotate valve
gsap.to("#valve", {
  rotate: 90,
  duration: 0.5
});

// Move gauge needle
gsap.to("#gaugeNeedle", {
  rotate: 45,
  transformOrigin: "center center",
  duration: 1
});

// Blink LED
gsap.to("#light", {
  opacity: 0,
  repeat: -1,
  yoyo: true,
  duration: 0.5
});
```

## 🎨 Reusable Components

All assets share the same definitions for consistency:

```svg
<svg viewBox="0 0 64 64">
  <defs>
    <!-- Include shared gradients -->
    <linearGradient id="metalGradient">...</linearGradient>
    <filter id="cyanGlow">...</filter>
  </defs>
  
  <!-- Asset layers -->
  <g id="metal">...</g>
  <g id="glass">...</g>
</svg>
```

## 📦 Usage

### HTML
```html
<img src="svg kit/pipes/pipe_straight.svg" alt="Pipe" />
```

### React
```jsx
import PipeStraight from './svg kit/pipes/pipe_straight.svg';

function Component() {
  return <PipeStraight className="w-16 h-16" />;
}
```

### Tailwind CSS
```html
<img src="svg kit/pipes/pipe_straight.svg" 
     class="w-16 h-16 hover:scale-110 transition-transform" />
```

## 🔧 Customization

### Change Colors
Edit the gradient definitions in `defs/defs.svg` to customize the entire kit.

### Add New Assets
Follow the layer structure and use existing gradients for consistency.

## 📄 License

MIT License - Free for personal and commercial use.

## 🤝 Contributing

Contributions welcome! Please maintain the design system consistency.