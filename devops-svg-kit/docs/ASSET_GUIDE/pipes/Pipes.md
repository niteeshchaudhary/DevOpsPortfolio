# PIPE_SYSTEM.md

> Package: Industrial Pipe System
> Version: 1.0
> Depends On:
>
> * DESIGN_SYSTEM.md
> * WORLD_BUILDING.md
> * ANIMATION_GUIDE.md

---

# Purpose

The Pipe System is the primary transportation network of the DevOps world.

Every major concept eventually travels through pipes.

Pipes represent movement.

Depending on the scene, flowing water may represent:

* Git commits
* CI artifacts
* Docker images
* HTTP requests
* Kafka messages
* Database replication
* Logs
* Metrics
* Deployment traffic
* Cache synchronization

Pipes are used throughout every scene in the portfolio.

They should become the visual language of the entire world.

---

# General Rules

Every pipe must

* Follow DESIGN_SYSTEM.md
* Use the shared metal material
* Use the shared glass material
* Expose animation layers
* Be modular
* Snap to every other pipe
* Never contain text
* Never contain baked shadows
* Use transparent background

---

# Standard Canvas

Primary

128×128

Variants

64×64

256×256

---

# Connection Standard

Every pipe connector has

Outer Diameter

24px

Glass Diameter

12px

Connection Radius

12px

Connection Center

Always aligned to grid.

Every connector must fit every other connector.

---

# Layer Structure

Every SVG must contain

shadow

metal

glass

water

bolts

overlay

Never merge these groups.

---

# Materials

Metal

Dark industrial steel.

Glass

Blue transparent inspection window.

Water

Animated cyan layer.

Bolts

Standard bolt component.

Overlay

Highlights and reflections.

---

# Animation Requirements

Every pipe supports

Water Flow

Glow Pulse

Hover Highlight

Failure State

Repair State

Water animation must be isolated.

---

# Asset Categories

The Pipe System is divided into functional groups.

---

# Group A — Core Pipes

These are the building blocks.

## pipe-straight

Purpose

Primary transport segment.

Connections

Left

Right

Animation

Continuous water flow.

Variants

Healthy

Leaking

Broken

Repairing

---

## pipe-vertical

Purpose

Vertical transportation.

Connections

Top

Bottom

---

## pipe-corner-left

90° bend.

Clockwise.

---

## pipe-corner-right

90° bend.

Counter-clockwise.

---

## pipe-cross

Four-way junction.

Water may split.

---

## pipe-t

Three-way splitter.

Flow divides.

---

## pipe-end

Closed pipe.

No output.

Often used before valves.

---

## pipe-cap

Decorative end cap.

No animation.

---

# Group B — Flow Control

---

## valve-wheel

Manual wheel valve.

Animated rotation.

Water begins only after opening.

---

## valve-lever

Industrial lever valve.

Open

Half Open

Closed

---

## automatic-valve

Motorized valve.

Status LEDs.

Can automatically react to pressure.

---

## emergency-shutoff

Large safety valve.

Normally open.

Closes during failures.

---

# Group C — Monitoring

---

## pressure-gauge

Needle animation.

Pressure states

Low

Normal

High

Critical

---

## flow-meter

Shows water speed.

Animated wheel.

---

## temperature-gauge

Industrial analog gauge.

---

## inspection-window

Large glass observation section.

Used to showcase flowing water.

---

# Group D — Filters

---

## coarse-filter

Large mesh.

Visible particles.

---

## fine-filter

Smaller mesh.

Cleaner output.

---

## separator

Flow splits into two outputs.

---

## purifier

Animated internal blades.

Represents validation or quality checks.

---

# Group E — Pumps

---

## pump-small

Compact booster.

Used inside factories.

---

## pump-large

Main pressure station.

Rotating motor.

Visible pistons.

---

## turbo-pump

High-speed version.

Used in production.

---

# Group F — Junctions

---

## junction-y

Y-shaped split.

---

## junction-x

Four-way cross.

---

## manifold

One input.

Four outputs.

Used for scaling.

---

## collector

Four inputs.

One output.

Used for aggregation.

---

# Group G — Damage

These assets represent infrastructure problems.

---

## pipe-leak-small

Small crack.

Few droplets.

---

## pipe-leak-large

Large rupture.

High-pressure spray.

---

## pipe-burst

Destroyed section.

Broken metal.

No water flow.

---

## rusted-pipe

Old infrastructure.

Reduced glow.

---

## cracked-glass

Broken inspection window.

---

# Group H — Repairs

---

## repair-clamp

Temporary metal clamp.

Bolted.

---

## weld-patch

Fresh welding marks.

---

## replacement-section

Brand new pipe.

Slightly brighter metal.

---

## maintenance-platform

Robot repair station.

---

# Group I — Special Pipes

---

## transparent-pipe

Almost entirely glass.

Perfect for showing water.

---

## reinforced-pipe

Heavy armor.

Large bolts.

---

## insulated-pipe

Protective outer shell.

---

## underground-pipe

Covered with dirt supports.

---

## overhead-pipe

Large suspension brackets.

---

# Group J — Supports

---

## wall-bracket

Single support.

---

## floor-support

Industrial stand.

---

## ceiling-hanger

Suspended pipe.

---

## expansion-joint

Flexible section.

---

## anchor-point

Heavy mounting block.

---

# Required Animation IDs

Every asset should expose

water

glass

metal

shadow

bolts

warning

flow

wheel

needle

motor

lights

steam

Never rename these IDs.

---

# Connection Rules

Every connection point must

Align perfectly

Rotate correctly

Mirror correctly

Maintain water continuity

Never create gaps

---

# Color Rules

Healthy

Blue water

Green indicator

Warning

Orange indicator

Reduced flow

Critical

Red indicator

No water

Repair

Yellow work light

Temporary clamp

---

# Usage Across the World

Mountain

Main reservoir pipes.

Factory

CI/CD transport.

Warehouse

Container routing.

Harbor

Fuel and cooling lines.

Database

Replication.

Cloud

Power conduits.

Security

Encrypted channels.

Monitoring

Log transport.

Production

Primary infrastructure.

---

# Hidden Details

Occasionally include

Serial numbers

Inspection stickers

Tiny warning labels

Maintenance dates

Manufacturer plates

These details should be subtle and never dominate the asset.

---

# Quality Checklist

Every pipe asset must:

* Snap seamlessly to other pipe assets.
* Maintain consistent proportions and stroke width.
* Use shared gradients and materials.
* Include all required animation layers.
* Be readable at 64×64.
* Export as optimized SVG.
* Support GSAP animation without editing.
* Match the Industrial Control Facility visual language.

If any of these checks fail, regenerate the asset rather than modifying unrelated design rules.
