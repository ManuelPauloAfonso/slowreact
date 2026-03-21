import type { Item } from './Item'

export type listItemProps = {
  item: Item
  onSelect: (id: number) => void
  selected: boolean
}
