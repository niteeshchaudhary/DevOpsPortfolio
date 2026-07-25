# ANIMATION_GUIDE.md

> Project: DevOps SVG Kit
> Version: 1.0
> Purpose:
>
> This document defines the animation language for the DevOps SVG Kit.
>
> SVGs are NOT static illustrations.
>
> Every asset should be designed with animation in mind.
>
> Motion should communicate infrastructure state, not simply decorate the screen.

---

# 1. Animation Philosophy

The visitor should never feel like objects are randomly moving.

Every movement has meaning.

Every animation explains a DevOps concept.

Motion should feel mechanical.

Purposeful.

Predictable.

Engineered.

Avoid:

❌ Floating

❌ Bouncing

❌ Cartoon squash/stretch

❌ Random rotation

❌ Constant shaking

❌ Attention-seeking movement

Instead use

✓ Hydraulic motion

✓ Mechanical movement

✓ Pressure

✓ Flow

✓ Rotation

✓ Sliding

✓ Conveyor movement

✓ Valve turning

✓ Water movement

✓ Electrical pulses

---

# 2. Global Animation Rules

Everything has weight.

Everything has inertia.

Machines never instantly start.

Machines never instantly stop.

Every movement has

Acceleration

↓

Movement

↓

Deceleration

---

# 3. Timing

Small interaction

100-250ms

Machine action

300-800ms

Valve rotation

500ms

Robot movement

800-1500ms

Large crane

1200-2500ms

Factory startup

2-4 seconds

World transition

3-6 seconds

Never animate instantly.

---

# 4. Easing

Use

power2.out

power2.inOut

expo.out

Avoid

bounce

elastic

back

The world is industrial.

Not playful.

---

# 5. Scroll Philosophy

Scrolling represents time.

Every scroll advances the production pipeline.

Nothing rewinds unless specifically designed.

The visitor is progressing through the SDLC.

---

# 6. Animation Categories

Every animation belongs to one category.

Continuous

Triggered

Reactive

State Change

Failure

Recovery

Celebration

---

# 7. Continuous Animations

Always running.

Examples

Clouds moving

Rain falling

Water flowing

LED blinking

Server fans spinning

Steam rising

Smoke drifting

Fish swimming

Birds flying

Wind turbines rotating

These create a living world.

---

# 8. Triggered Animations

Activated by scroll.

Examples

Valve opens

Door slides

Robot starts walking

Crane lifts container

Conveyor starts

Bridge extends

Deployment begins

---

# 9. Reactive Animations

Triggered by hover.

Examples

Gauge needle moves

LED brightens

Water speeds up

Robot waves

Server lights blink

Pressure meter responds

Never overreact.

---

# 10. State Animations

Represent infrastructure state.

Healthy

Warning

Critical

Recovering

Every asset should support these states.

---

# 11. Water

Water is the primary animation language.

Water never stops moving.

Water represents

Code

Requests

Logs

Deployments

Replication

Data

Movement

Smooth

Continuous

Directional

No sudden jumps.

---

# 12. Water Speed

Healthy

Normal flow

High Traffic

Fast flow

Failure

Stopped

Blocked

Repair

Slow restart

Recovered

Normal again

---

# 13. Water Glow

Glow should pulse gently.

Never flash.

Glow intensity

10%

↓

15%

↓

10%

Loop forever.

---

# 14. Pressure

Pressure represented by

Gauge needle

Pipe vibration

Steam

Valve movement

Higher pressure

More flow

Not faster animation everywhere.

---

# 15. Pipe Leaks

Story

Pressure becomes too high.

Small crack appears.

Water leaks.

Warning light activates.

Maintenance robot arrives.

Repair complete.

Leak disappears.

This should happen across several scroll sections.

---

# 16. Valve

Animation

Closed

↓

Rotate

↓

Open

Water begins flowing only after valve opens.

---

# 17. Conveyor Belt

Texture scrolls.

Packages move.

Rollers rotate.

Motor spins.

Nothing teleports.

---

# 18. Robot

Walking

Repairing

Inspecting

Idle

Robots never run.

Purposeful movement only.

---

# 19. Cranes

Lift

Move

Lower

Release

Return

Never move diagonally.

Always mechanical.

---

# 20. Server Rack

LED blinking

Fan spinning

Occasional disk activity

Status light changes

Subtle only.

---

# 21. CRT Terminal

Scanlines

Cursor blink

Very slight flicker

Random log updates

Never fake typing constantly.

---

# 22. Gauge

Needle moves smoothly.

No snapping.

Maximum angle

270°

---

# 23. Monitoring Screens

Graphs update.

CPU changes.

Memory fluctuates.

Traffic increases.

Charts never freeze.

---

# 24. Steam

Opacity

Movement

Expansion

Fade

Steam always rises.

---

# 25. Smoke

Slow.

Soft.

Transparent.

Never thick.

---

# 26. Rain

Always falling.

Parallax layers.

Different speeds.

Never stops.

---

# 27. Power Lines

Small electric pulse travels.

Represents energy.

Pulse repeats.

---

# 28. Harbor

Ships gently rock.

Water ripples.

Cranes move.

Containers lifted.

Nothing should feel static.

---

# 29. Kubernetes Pod

Spawn

Small splash

Dock

Container loaded

Depart

If unhealthy

Ship slowly sinks

Replacement immediately appears

---

# 30. Autoscaling

Traffic increases

↓

Pressure rises

↓

Alarm

↓

Factory produces new Pod

↓

Ship launched

↓

Traffic normalizes

Animation tells the story without text.

---

# 31. Database Replication

Water level synchronizes.

Pulses move through pipes.

Replica updates slightly behind primary.

Very subtle.

---

# 32. Failover

Primary tank cracks.

Warning light.

Valve closes.

Replica activates.

Pressure stabilizes.

Visitors should understand High Availability.

---

# 33. Kafka

Train enters.

Wagons fill.

Station processes.

Train leaves.

If backlog

Queue grows.

Second train appears.

---

# 34. Redis

Small bypass opens.

Fast glowing packets skip queue.

Everything accelerates.

---

# 35. Firewall

Red packets

Rejected

Green packets

Pass

Rejected packets disappear.

Never explode.

---

# 36. Terraform

Blueprint appears.

Construction grid.

Cranes assemble structure.

Lights activate.

Ready.

---

# 37. Ansible

One command.

Many robots receive signal.

Robots disperse.

Multiple repairs happen simultaneously.

---

# 38. Deployment

Container arrives.

Crane lifts.

Ship loaded.

Bridge opens.

Traffic switches.

Lights green.

Deployment complete.

---

# 39. Rollback

Storm.

Warning lights.

Bridge reverses.

Old environment restored.

Very satisfying animation.

---

# 40. Success

Machine lights

Green

Steam

Reduced

Water

Stable

Pressure

Normal

The infrastructure looks calm.

---

# 41. Hover Effects

Hover should reveal intelligence.

Valve

Slight rotation

Gauge

Needle movement

Server

LED blink

Robot

Looks toward cursor

Pipe

Water speeds up

Crane

Head rotates

Database

Ripple

No exaggerated effects.

---

# 42. Idle Life

The world never sleeps.

Clouds

Rain

Birds

Water

Steam

Smoke

Fans

Robots

Ships

Fish

Lights

Everything moves.

Even if the visitor stops scrolling.

---

# 43. Animation IDs

Every SVG should expose predictable IDs.

Example

water

glass

metal

shadow

lights

bolts

needle

wheel

fan

door

screen

steam

smoke

packet

crane

robot

These IDs are reserved.

Never rename them.

---

# 44. GSAP Compatibility

Every animated element must be isolated.

Never merge moving parts.

Each animation target should exist as its own group.

This allows timeline composition.

---

# 45. Performance

Target

60 FPS

Avoid

Animating filters

Animating shadows

Animating thousands of nodes

Prefer

Transform

Opacity

Clip Paths

Masks

Path offset

Stroke dash offset

---

# 46. Animation Storytelling

Animation should always answer

"What changed?"

Examples

Traffic increased

↓

Pressure rises

More Pods appear

Deployment finished

↓

City lights turn on

Database failed

↓

Water reroutes

Logs increasing

↓

More glowing capsules

Never animate without purpose.

---

# 47. Scroll Timeline Philosophy

The portfolio is one uninterrupted timeline.

Every 400–800px of scrolling should introduce one meaningful infrastructure event.

Examples include:

- Git push opens the reservoir gate
- CI conveyor starts moving
- Robot arm stamps a successful build
- Docker container receives a version tag
- Crane loads a container onto a ship
- Harbor traffic increases
- Pod ship is replaced after failure
- Database failover occurs
- Monitoring alerts fire and clear
- Terraform crane constructs a new building
- Production city lights illuminate

The visitor should feel they are advancing through a living deployment.

---

# 48. Golden Rule

Animations are not decorations.

Animations are explanations.

If an animation does not teach,
communicate,
or reinforce a DevOps concept,

it should not exist.