# DESIGN_SYSTEM.md

> Project: DevOps SVG Kit
> Version: 1.0
> Status: Production
> Purpose:
>
> This document defines the universal design language for every SVG asset
> in the DevOps SVG Kit.
>
> Every generated asset MUST follow these rules.
>
> The objective is to make every SVG appear as if it was created by the
> same illustrator on the same day.

---

# 1. Design Philosophy

This is NOT an icon library.

This is NOT clipart.

This is NOT a UI illustration pack.

This project represents an entire living industrial infrastructure where
real-world engineering concepts visually explain DevOps concepts.

Every object should feel like it belongs inside the same world.

Every pipe.
Every machine.
Every server.
Every crane.
Every robot.

should feel manufactured by the same fictional company.

---

# 2. Overall Style

Style Name

Industrial Control Facility

Mood

Night Shift

Theme

Mechanical
Industrial
Minimal
Premium
Technical
Functional
Clean
Readable

Avoid

❌ Cartoon

❌ Comic

❌ Flat colorful illustrations

❌ Neon overload

❌ Cyberpunk clichés

❌ Hacker green everywhere

❌ 3D rendering

❌ Photorealism

❌ Glassmorphism

---

# 3. Inspiration

Visual references

Industrial Refineries

Hydroelectric Plants

Container Ports

Data Centers

Railway Networks

SCADA Control Rooms

Manufacturing Assembly Lines

NOC Rooms

Power Distribution Stations

Mechanical Workshops

Everything should feel engineered.

Nothing should feel decorative.

---

# 4. Art Direction

The entire world exists at night.

Only machines create light.

Lighting comes from

Server LEDs

Control panels

Warning lamps

Water glow

Pressure gauges

CRT monitors

Inspection lamps

Never illuminate the entire scene.

Darkness creates contrast.

---

# 5. Perspective

All assets use

30° Isometric

Do NOT mix perspectives.

Never generate front-facing assets unless specifically requested.

Every object should align on the same grid.

---

# 6. Canvas Sizes

Standard

64 x 64

128 x 128

256 x 256

512 x 512

Use powers of two.

---

# 7. Grid System

Every asset follows

8px spacing

Objects should snap naturally together.

Connection points should always align.

---

# 8. Stroke Rules

Stroke Width

2px

Stroke Color

#20242A

Line Caps

Round

Line Join

Round

Never use inconsistent strokes.

---

# 9. Corners

Small Radius

6px

Medium

10px

Large

16px

No sharp industrial edges unless intentional.

---

# 10. Primary Color Palette

Background

#0A0F14

Panel

#171C24

Steel Dark

#252B33

Steel

#39414B

Steel Highlight

#596270

Glass

#6CD8FF

Water

#00CFFF

Healthy

#2EE66B

Warning

#F4B740

Danger

#FF5A5A

Logs

#B388FF

Deployment

#FF8F1F

Database

#4FC3F7

Shadow

rgba(0,0,0,0.35)

Never invent new colors.

---

# 11. Materials

There are only six materials.

Metal

Used for

Machines

Pipes

Frames

Supports

Glass

Used for

Pipe windows

Control panels

Monitoring displays

Water

Only inside pipes

Only animated

Rubber

Belts

Seals

Handles

LED

Indicators

Status lights

CRT

Terminal monitors

Never invent additional materials.

---

# 12. Gradients

Metal

Top

#5B6470

↓

Middle

#3C434D

↓

Bottom

#262C34

Glass

Top

rgba(255,255,255,0.30)

↓

Bottom

rgba(0,180,255,0.20)

Water

Solid Cyan

Glow applied separately.

---

# 13. Lighting Rules

Light direction

Top Left

Every highlight

Top Left

Every shadow

Bottom Right

Never violate this.

---

# 14. Shadows

One shadow only.

Opacity

35%

Blur

4px

Offset

3px

No multiple shadows.

---

# 15. Glow Rules

Glow is subtle.

Glow radius

6px

Never create huge neon glows.

Only

LED

Water

Indicators

Warning lights

Terminals

---

# 16. Bolts

Every industrial object uses the same bolt.

Bolt Diameter

8px

Dark center

Light outer ring

Small highlight

Every bolt identical.

---

# 17. Pipe Standard

Pipe Thickness

24px

Glass Window

12px

Metal Border

6px

Every pipe connects seamlessly.

Pipe connection centers are always aligned.

---

# 18. Water Standard

Water is the heart of the world.

Water represents

Code

Traffic

Requests

Deployments

Logs

Messages

Replication

Water is NEVER static.

Every water layer must be independently animatable.

---

# 19. SVG Layer Hierarchy

Every SVG must follow

<svg>

<defs>

<g id="shadow"/>

<g id="metal"/>

<g id="glass"/>

<g id="water"/>

<g id="lights"/>

<g id="bolts"/>

<g id="overlay"/>

</svg>

Layer order must never change.

---

# 20. SVG Naming

Use

kebab-case

Examples

pipe-straight.svg

server-rack.svg

robot-welder.svg

Never use spaces.

Never use capitals.

---

# 21. Group IDs

Always use

shadow

metal

glass

water

lights

bolts

warning

overlay

wheel

needle

screen

door

fan

These IDs are used by GSAP.

Never rename them.

---

# 22. Complexity

Target

80–250 SVG elements.

Avoid

Single giant path.

Readable SVGs only.

Prefer

rect

circle

ellipse

path

line

polygon

Reuse symbols.

---

# 23. Animation Readiness

Every movable object must have isolated groups.

Example

Valve

wheel

base

Pipe

glass

water

Gauge

needle

glass

Robot

head

arms

legs

Tools

Never merge moving components.

---

# 24. Reusability

Every asset should behave like LEGO.

Assets should connect naturally.

Rotate correctly.

Mirror correctly.

Scale consistently.

No baked backgrounds.

Transparent background only.

---

# 25. Text

Never embed text.

All labels are rendered by React.

---

# 26. Damage States

Assets may have variants.

Example

Pipe

Healthy

Leaking

Broken

Repairing

Valve

Open

Closed

Half Open

Gauge

Normal

Warning

Critical

Maintain identical dimensions.

---

# 27. Consistency Rules

Before generating any asset verify

✓ Same stroke

✓ Same gradients

✓ Same lighting

✓ Same perspective

✓ Same bolt style

✓ Same glow

✓ Same naming

✓ Same layer hierarchy

✓ Same connection points

If one differs

Regenerate.

---

# 28. Performance

SVGs should be optimized.

Avoid

Thousands of path points.

Prefer

Simple geometry.

Target

< 20 KB

Maximum

50 KB

---

# 29. Forbidden

Never use

Embedded raster images

Filters on every object

Random gradients

Text

Different perspectives

Different stroke widths

Bright backgrounds

Over-saturated colors

Clipart style

Anime style

Comic style

---

# 30. Quality Checklist

Every generated asset must satisfy

□ Modular

□ Production Ready

□ SVG Optimized

□ GSAP Ready

□ Dark Theme Compatible

□ Transparent Background

□ Isometric

□ Mechanical

□ Reusable

□ Layered

□ Animated

□ Consistent

If ANY item fails

The asset is rejected.

---

# 31. Asset Personality

Every object should feel

Reliable

Engineered

Repairable

Modular

Maintainable

Functional

Purpose-built

It should feel like infrastructure that keeps the internet alive.

---

# 32. Final Principle

Every SVG generated for this project should answer one question:

"If this asset were placed beside every other asset in the library,
would an experienced designer believe they all came from the same design team?"

If the answer is not an immediate **YES**,

the asset must be redesigned.