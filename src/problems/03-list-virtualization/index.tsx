import type { Item } from '@/types/Item'

interface Props {
  items: Item[]
}

export default function ListVirtualization({ items }: Props) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} style={{ height: 50 }}>
          {item.name}
        </li>
      ))}
    </ul>
  )
}
