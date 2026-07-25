# ROBOT_SYSTEM.md

> Package: Industrial Robot System
> Version: 1.0
> Depends On:
>
> * DESIGN_SYSTEM.md
> * WORLD_BUILDING.md
> * ANIMATION_GUIDE.md
> * PIPE_SYSTEM.md

---

# Purpose

Robots are the autonomous workforce of the DevOps world.

They never sleep.

They never panic.

They constantly monitor, repair, inspect and optimize the infrastructure.

They represent automation.

Whenever something would normally require a human engineer,
an industrial robot performs that task.

The visitor should immediately understand that automation is the
reason this world keeps running.

---

# Design Philosophy

Robots are not characters.

They are tools.

Every robot has a single specialized purpose.

Think of them as industrial machines with intelligence.

Avoid

❌ Human faces

❌ Cartoon expressions

❌ Weapons

❌ Bright colors

❌ Futuristic armor

Prefer

✓ Mechanical joints

✓ Hydraulic pistons

✓ Utility tools

✓ Industrial wheels

✓ Inspection cameras

✓ Service lights

---

# Visual Inspiration

Boston Dynamics

Warehouse AGVs

Factory Maintenance Robots

Autonomous Forklifts

Inspection Drones

Industrial Welding Arms

Mining Robots

Rail Maintenance Vehicles

---

# Shared Design Rules

Color

Industrial steel

Dark graphite

Soft cyan accents

Green status LEDs

Yellow maintenance lights

Red fault indicators

Lighting

Top-left

Soft shadows

Minimal glow

Only LEDs emit light.

---

# Standard Canvas

64×64

128×128

256×256

512×512

---

# Required SVG Layers

shadow

metal

glass

lights

wheel

arm

tool

sensor

overlay

Never merge movable parts.

---

# Robot Categories

---

# Class A — Maintenance Robots

Primary responsibility:

Repair infrastructure.

---

## maintenance-bot-mk1

Small four-wheel robot.

Tools

Wrench

Welder

Repair arm

Animation

Drive

Tool rotation

LED blink

Variants

Idle

Driving

Repairing

Charging

---

## maintenance-bot-heavy

Larger tracked robot.

Used for repairing

Large pipes

Power stations

Bridge supports

Additional

Hydraulic arm

Stabilizers

---

## emergency-repair-unit

Fast response vehicle.

Yellow beacon.

Deploys automatically when failures occur.

---

# Class B — Inspection Robots

Purpose

Observe.

Measure.

Report.

Never repair.

---

## inspection-bot

Camera mast

Thermal sensor

Laser scanner

Animation

Camera rotation

Scanning beam

Slow movement

---

## pipe-inspector

Small robot that moves inside transparent pipes.

Represents

Health checks

Network diagnostics

Pipeline inspection

---

## tunnel-inspector

Crawler robot.

Used underground.

Database district.

---

# Class C — Welding Robots

Purpose

Permanent repairs.

---

## welding-unit

Large articulated arm.

Animation

Spark generation

Torch movement

Arm rotation

Variants

Idle

Active

Cooling

---

## mobile-welder

Self-driving welding platform.

Repairs leaks.

Bridge damage.

Pipe cracks.

---

# Class D — Logistics Robots

Purpose

Move assets.

---

## cargo-bot

Four-wheel platform.

Carries

Servers

Containers

Valves

Packages

Animation

Wheel rotation

Cargo suspension

---

## forklift-bot

Industrial autonomous forklift.

Used in

Warehouse

Factory

Harbor

---

## pallet-bot

Small warehouse transporter.

Moves slowly.

---

# Class E — Drone Systems

Purpose

Rapid inspection.

---

## quad-drone

Four rotors.

Camera.

Inspection light.

Animation

Rotor spin

Hover

Scan beam

---

## repair-drone

Carries

Cable

Bolts

Replacement parts

Repairs

Power lines

Communication towers

---

## security-drone

Patrols secure areas.

Animation

Search light

Camera rotation

---

# Class F — Construction Robots

Purpose

Terraform representation.

---

## builder-bot

Small tracked machine.

Deploys

Steel beams

Pipe supports

Platforms

---

## crane-assistant

Mini crane.

Works alongside large cranes.

---

## blueprint-drone

Projects holographic construction plans.

---

# Class G — Cleaning Robots

Purpose

Environmental realism.

---

## floor-cleaner

Quiet cleaning robot.

Moves slowly.

Leaves polished reflections.

---

## cable-organizer

Automatically arranges loose cables.

---

## debris-collector

Collects damaged parts.

Appears after failures.

---

# Class H — Operations Robots

Purpose

Monitoring.

---

## monitoring-bot

Carries multiple displays.

Checks gauges.

Reads sensors.

Animation

Screen updates

Head rotation

---

## metric-collector

Collects glowing data capsules.

Transfers them to monitoring center.

Represents

Prometheus scraping.

---

## log-courier

Carries glowing purple capsules.

Represents

Log shipping.

---

# Class I — Database Robots

Purpose

Maintain storage.

---

## storage-technician

Installs disks.

Checks storage tanks.

---

## backup-robot

Transfers backup cartridges.

Animation

Lift

Carry

Store

---

# Class J — Utility Robots

Purpose

General assistance.

---

## battery-cart

Portable power station.

Charges other robots.

---

## tool-cart

Mobile toolbox.

Appears near repairs.

---

## beacon-unit

Portable warning light.

Automatically deployed.

---

# Required Animations

Every robot should support

Idle

Movement

Working

Failure

Recovery

Charging

Shutdown

Restart

---

# Wheel Rules

Every wheel

Separate layer.

Independent animation.

Correct perspective.

---

# Arm Rules

Every robotic arm

Base

Upper arm

Lower arm

Joint

Tool

Separate groups.

Never merge.

---

# Tool Library

Standard tools

Welder

Wrench

Screwdriver

Inspection Camera

Laser Scanner

Hydraulic Clamp

Vacuum

Manipulator

Gripper

Every tool should also exist as an independent SVG asset.

---

# LED Language

Green

Healthy

Blue

Working

Yellow

Maintenance

Red

Fault

White

Inspection

---

# Failure Behaviour

Robots never explode.

Instead

Stop moving

Flash warning

Wait

Receive repair

Restart

Continue working

Automation always recovers.

---

# Interaction Rules

Hover

Robot looks toward cursor.

Tool arm moves slightly.

LED brightens.

Nothing exaggerated.

---

# Hidden Details

Possible easter eggs

Coffee mug

Linux penguin sticker

Tiny "I ❤️ YAML" decal

"Works on Prod" toolbox

Robot serial number

Maintenance checklist

Small warning labels

Battery percentage display

Do not overuse.

---

# Scene Usage

Factory

Maintenance

Warehouse

Cargo movement

Harbor

Container loading

Server Room

Hardware replacement

Database

Storage maintenance

Security

Patrol

Cloud

Power inspection

Production

Routine monitoring

---

# Performance Guidelines

SVG size

Preferred

<25 KB

Maximum

60 KB

Animation

Transform only

Avoid animating filters

Optimize paths

Reuse symbols

---

# Quality Checklist

Every robot must:

* Look purpose-built.
* Match the Industrial Control Facility design language.
* Expose all moving parts as separate SVG groups.
* Support GSAP animation without modification.
* Use consistent materials and lighting.
* Feel mechanically believable.
* Clearly communicate its role through its tools and silhouette.
* Be recognizable even at 64×64.

A visitor should be able to identify what the robot does before reading any label.

---

# Final Principle

Robots are the physical embodiment of automation.

Whenever the portfolio demonstrates a DevOps capability—

deploying,

repairing,

monitoring,

scaling,

backing up,

recovering,

or maintaining—

there should be a specialized robot performing that task.

The robots should make the world feel self-sustaining, reinforcing the core DevOps idea that reliable systems are built through automation rather than constant manual intervention.
