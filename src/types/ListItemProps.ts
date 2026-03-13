type Item = {
  id: number
  name: string
}

export type listItemProps = {
  item: Item
  onSelect: (id: number) => void
  selected: boolean
}
