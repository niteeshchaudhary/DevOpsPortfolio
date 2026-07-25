# UI_ELEMENTS_SYSTEM.md

> Package: User Interface & Interactive Components
> Version: 1.0
> Depends On:
>
> * DESIGN_SYSTEM.md
> * WORLD_BUILDING.md
> * ANIMATION_GUIDE.md

---

# Purpose

Unlike a traditional portfolio website where the UI sits on top of the content, the interface in this project is part of the world itself.

Every panel, button, tooltip, and information card should feel like it belongs inside an industrial control facility.

Nothing should look like a standard website.

Visitors should feel they are operating a real industrial monitoring terminal rather than browsing a portfolio.

---

# Design Philosophy

Inspired by

* SCADA Control Systems
* Industrial HMIs
* Nuclear Power Plant Consoles
* NASA Mission Control
* Military Radar Systems
* Retro CRT Terminals
* Hacker Terminals (1980–1990)
* Cyberdeck Interfaces

The UI should communicate

Precision

Reliability

Engineering

Minimalism

Confidence

---

# Visual Style

Theme

Dark Industrial Terminal

Material

Brushed Steel

Dark Graphite

Tempered Glass

CRT Screens

Green Terminal Glow

Blue LEDs

Orange Warning Lights

Typography

Monospace

Sharp edges

Minimal rounded corners

Subtle scanlines

---

# UI Principles

Every UI element should

✓ Feel attached to machinery

✓ Have physical depth

✓ Use industrial lighting

✓ Include subtle animations

✓ Support hover states

✓ Have operational purpose

Avoid

❌ Material Design

❌ iOS styling

❌ Glassmorphism

❌ Cartoon icons

❌ Floating rounded cards

❌ Bright gradients

---

# Color Language

Healthy

Green

Working

Blue

Information

Cyan

Warning

Amber

Critical

Red

Maintenance

Yellow

Disabled

Gray

---

# Standard Canvas

Icons

32×32

48×48

64×64

Panels

256×

512×

1024×

Reusable

SVG

Transparent

---

# Shared SVG Layers

shadow

frame

glass

screen

text

lights

overlay

reflection

Never merge animated components.

---

# Asset Categories

---

# Group A — Control Panels

## industrial-panel-small

Used for

Machine controls

Robot controls

Pipe controls

Contains

Status LEDs

Display

Buttons

Bolts

---

## industrial-panel-medium

Multiple gauges.

Terminal.

Buttons.

---

## industrial-panel-large

Mission control.

Used in

Factory

Monitoring

Cloud

---

## maintenance-panel

Repair interface.

Yellow work light.

---

# Group B — Terminal Windows

## crt-terminal

Green terminal.

Animation

Cursor blink

Typing

Scanlines

Noise

---

## shell-window

Linux terminal.

Commands appear dynamically.

Never baked into SVG.

---

## log-window

Scrolling logs.

Dynamic content.

---

## deployment-console

Pipeline output.

Used in Harbor.

---

# Group C — Dashboards

## dashboard-basic

Simple metrics.

---

## dashboard-large

Full monitoring.

---

## graph-panel

Reusable graph.

Animation

Live updates.

---

## topology-map

Infrastructure map.

---

## metric-tile

CPU

RAM

Network

Storage

Latency

---

# Group D — Buttons

## push-button

Industrial button.

Variants

Green

Blue

Amber

Red

Gray

Animation

Press

Release

Glow

---

## emergency-stop

Large mushroom button.

---

## toggle-switch

Mechanical.

Animation

Flip.

---

## rotary-switch

Industrial selector.

---

## keyboard-key

Terminal keyboard.

---

# Group E — Gauges

## pressure-gauge

---

## cpu-gauge

---

## network-gauge

---

## storage-gauge

---

## thermometer

---

## dial-meter

Reusable.

---

# Group F — Progress Indicators

## loading-bar

Industrial style.

---

## pipeline-progress

Shows deployment.

---

## circular-loader

Mechanical.

---

## completion-meter

Green completion.

---

## queue-indicator

Moving segments.

---

# Group G — Notifications

## info-banner

Blue.

---

## warning-banner

Amber.

---

## critical-banner

Red.

---

## success-banner

Green.

---

## toast-panel

Slides from control panel.

---

# Group H — Tooltips

## tooltip-small

---

## tooltip-large

---

## floating-description

Appears near machine.

---

## metric-popup

Hover graphs.

---

# Group I — Information Cards

Cards never float.

They attach to the world.

---

## project-card

Appears beside factory machine.

Contains

Project

Description

Tech Stack

Links

---

## skill-card

Appears beside robot.

---

## timeline-card

Appears beside pipeline.

---

## achievement-card

Appears near production city.

---

## experience-card

Appears inside control room.

---

# Group J — Interactive Widgets

## command-input

User types commands.

---

## search-panel

Terminal search.

---

## filter-panel

Monitoring filters.

---

## timeline-slider

Industrial handle.

---

## minimap

Entire world overview.

---

# Group K — Icons

Create consistent icon pack.

---

## github-icon

---

## docker-icon

---

## kubernetes-icon

---

## terraform-icon

---

## aws-icon

---

## ansible-icon

---

## linux-icon

---

## monitoring-icon

---

## security-icon

---

## cloud-icon

All icons follow industrial outline style.

---

# Group L — Windows

## popup-window

Attached to machine.

---

## modal-frame

Industrial steel.

---

## side-panel

Slides from machinery.

---

## floating-monitor

Mounted on robotic arm.

---

# Group M — Navigation

## world-progress-bar

Shows journey.

---

## scene-indicator

Current area.

---

## navigation-terminal

Quick jump.

---

## breadcrumb-display

Industrial LCD.

---

# Group N — Cursor Effects

## terminal-cursor

---

## hover-highlight

---

## scan-ring

---

## magnetic-pointer

---

## click-ripple

---

# Group O — Loading Screens

## boot-screen

Old BIOS startup.

---

## linux-boot

Scrolling boot logs.

---

## deployment-loading

Container deployment.

---

## system-online

Green startup animation.

---

# Group P — Decorative UI

## bolt

---

## hinge

---

## cable-entry

---

## vent

---

## warning-label

---

## qr-label

---

## serial-plate

---

## inspection-sticker

Reusable details.

---

# UI Animation Rules

Continuous

Cursor blink

LED blink

Screen refresh

Graphs

Typing

Triggered

Button press

Window open

Tooltip fade

Panel slide

Graph update

Reactive

Hover

Glow

Scan

Terminal focus

Machine selection

---

# Typography Rules

Font

JetBrains Mono

IBM Plex Mono

Fira Code

Never use proportional fonts.

Text Colors

Green

Blue

White

Amber

Red

Maximum

Three text colors per panel.

---

# Storytelling Through UI

The interface evolves.

Beginning

Simple terminal.

↓

Factory

Machine controls.

↓

Harbor

Deployment dashboard.

↓

Server Room

Infrastructure monitoring.

↓

Database

Storage analytics.

↓

Cloud

Regional control.

↓

Production City

Executive operations center.

The UI becomes more sophisticated as the infrastructure grows.

---

# Hidden Details

Possible easter eggs

"sudo make coffee"

ASCII penguin

Animated Matrix rain

Tiny Vim editor

Fake system uptime

"Last Deploy: Successful"

Robot battery widget

Retro BIOS logo

Coffee level gauge

Tiny pixel game hidden in terminal

---

# Integration

FACTORY_SYSTEM

Machine controls

Build progress

SERVER_ROOM_SYSTEM

Rack dashboards

Terminal consoles

KUBERNETES_HARBOR_SYSTEM

Deployment tracking

Ship status

MONITORING_SYSTEM

Graphs

Alerts

Metrics

DATABASE_SYSTEM

Storage analytics

Replication panels

SECURITY_SYSTEM

Access panels

Authentication screens

CLOUD_INFRASTRUCTURE_SYSTEM

Regional maps

Power distribution

ROBOT_SYSTEM

Robot diagnostics

Maintenance screens

EFFECTS_SYSTEM

Glow

Scan

Pulse

Weather overlays

---

# Performance Guidelines

Preferred SVG Size

Icons

<5 KB

Panels

<20 KB

Large dashboards

<50 KB

Use reusable symbols.

Animate transforms instead of paths.

Avoid excessive filters.

Target 60 FPS.

---

# Accessibility

Every interactive element should support

Keyboard navigation

Visible focus state

Screen reader labels (implemented in React)

High contrast mode

Reduced motion compatibility

Color should never be the only status indicator.

---

# Quality Checklist

Every UI asset must:

* Match the Industrial Control Facility design language.
* Feel physically integrated into the environment.
* Support independent animation layers.
* Be reusable across multiple scenes.
* Use consistent typography and spacing.
* Scale cleanly from desktop to mobile.
* Be optimized for GSAP and React integration.
* Maintain a retro-terminal aesthetic without sacrificing readability.

---

# Final Principle

The UI is not an overlay.

It is another machine inside the world.

Every button controls real infrastructure.

Every dashboard reports live operations.

Every terminal belongs to an engineer.

Every information panel feels bolted onto steel.

Visitors should never feel they are browsing a portfolio website.

They should feel as though they have been handed access to the control room of a massive automated software factory—where every interaction reveals another piece of the DevOps ecosystem.
