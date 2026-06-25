import { useState } from 'react'

import type { Item } from '../../types/Item'
import { items } from '../../mocks/items'

function ListItem({
  item,
  onSelect,
  selected,
}: {
  item: Item
  onSelect: (id: number) => void
  selected: boolean
}) {
  const label = `${item.name} · #${item.id.toString().padStart(5, '0')}`
  return (
    <div style={{ display: 'flex', gap: 8, padding: 4 }}>
      <span>{label}</span>
      <button onClick={() => onSelect(item.id)}>
        {selected ? 'Selected' : 'Select'}
      </button>
    </div>
  )
}

const rows = items.slice(0, 4000)

export default function UnnecessaryRerenders() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <div>
      <h1>Unnecessary Re-renders</h1>
      {rows.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onSelect={(id) => setSelectedId(id)}
          selected={selectedId === item.id}
        />
      ))}
    </div>
  )
}
