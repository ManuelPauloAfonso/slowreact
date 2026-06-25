import { useState } from 'react'

const values = Array.from(
  { length: 5000 },
  (_, i) => Math.abs(Math.sin(i)) * 100
)

function SearchBox({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search..."
    />
  )
}

function Chart() {
  return (
    <svg width={1000} height={120}>
      {values.map((v, i) => (
        <rect key={i} x={i * 0.2} y={120 - v} width={0.18} height={v} />
      ))}
    </svg>
  )
}

function Summary() {
  const total = values.reduce((sum, v) => sum + v, 0)
  const max = values.reduce((m, v) => Math.max(m, v), 0)
  const avg = total / values.length
  return (
    <div>
      total {Math.round(total)} · max {Math.round(max)} · avg {avg.toFixed(2)}
    </div>
  )
}

export default function BadStatePlacement() {
  const [search, setSearch] = useState('')

  return (
    <div>
      <SearchBox value={search} onChange={setSearch} />
      <Chart />
      <Summary />
    </div>
  )
}
