import { items } from '@/mocks/items'

export default function ListVirtualization() {
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
