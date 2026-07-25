import { memo, useMemo } from 'react'
import asciiRaw from '../../mypic.txt?raw'

// Characters that form the empty/dark background of the ASCII canvas. They are
// rendered transparent so only the figure glows — like a real neofetch logo.
const BG_CHARS = new Set(['-', ' '])

// Strip the all-background border rows (the generator's dashed frame) so the
// portrait sits tightly inside its terminal window.
function cropLines(raw) {
  const all = raw.replace(/\n+$/, '').split('\n')
  const isBgLine = (line) => line.length === 0 || [...line].every((c) => BG_CHARS.has(c))
  let top = 0
  while (top < all.length && isBgLine(all[top])) top++
  let bottom = all.length - 1
  while (bottom >= top && isBgLine(all[bottom])) bottom--
  if (top > bottom) return []
  return all.slice(top, bottom + 1)
}

// Group consecutive characters into runs so each line renders as a handful of
// <span>s (one per color transition) instead of one span per character.
function colorizeLine(line, color) {
  const runs = []
  let buf = ''
  let bufIsBg = null
  const flush = () => {
    if (buf) { runs.push({ text: buf, bg: bufIsBg }); buf = '' }
  }
  for (const ch of line) {
    const isBg = BG_CHARS.has(ch)
    if (bufIsBg === null) { bufIsBg = isBg; buf = ch }
    else if (isBg === bufIsBg) { buf += ch }
    else { flush(); bufIsBg = isBg; buf = ch }
  }
  flush()
  return runs.map((r, i) => (
    <span key={i} style={{ color: r.bg ? 'transparent' : color }}>{r.text}</span>
  ))
}

function AsciiPortrait({ color = '#00CFFF', className = '' }) {
  const lines = useMemo(() => cropLines(asciiRaw), [])
  const rendered = useMemo(
    () => lines.map((line, i) => (
      <span key={i} style={{ display: 'block' }}>{colorizeLine(line, color)}</span>
    )),
    [lines, color]
  )
  return (
    <pre
      aria-hidden="true"
      className={`ascii-portrait m-0 whitespace-pre select-none ${className}`}
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        lineHeight: '1',
        letterSpacing: '0',
        color: 'transparent',
      }}
    >
      {rendered}
    </pre>
  )
}

export default memo(AsciiPortrait)
