import { useState } from 'react'

function SearchBox({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />
}

function Chart() {
  console.log('Chart render')
  return <div>Heavy chart</div>
}

function Summary() {
  console.log('Summary render')
  return <div>Summary stats</div>
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
