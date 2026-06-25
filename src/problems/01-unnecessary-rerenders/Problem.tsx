import { useState } from 'react'

import type { listItemProps } from '../../types/ListItemProps'
import { items } from '../../mocks/items'

function ListItem({ item, onSelect, selected }: listItemProps) {
  return (
    <div>
      <span>{item.name}</span>
      <button onClick={() => onSelect(item.id)}>
        {selected ? 'Selected' : 'Not selected'}
      </button>
    </div>
  )
}

export default function UnnecessaryRerenders() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  return (
    <div>
      <h1>Unnecessary Re-renders</h1>
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onSelect={setSelectedId}
          selected={selectedId === item.id}
        />
      ))}
    </div>
  )
}
