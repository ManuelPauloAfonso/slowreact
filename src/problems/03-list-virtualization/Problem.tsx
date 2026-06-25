import { items } from '@/mocks/items'

const rows = items.slice(0, 10000)

export default function ListVirtualization() {
  return (
    <ul>
      {rows.map((item) => (
        <li key={item.id} style={{ height: 50, padding: 8 }}>
          {item.name}
        </li>
      ))}
    </ul>
  )
}
