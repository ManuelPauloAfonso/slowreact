import type { Item } from '@/types/Item'
import { items } from '@/mocks/items'
import { useState } from 'react'

export default function SlowInteractions() {
  const [search, setSearch] = useState('')
  const filtered: Item[] = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filtered.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
