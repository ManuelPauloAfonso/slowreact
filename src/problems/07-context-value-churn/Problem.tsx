import { createContext, memo, useContext, useState } from 'react'

type Settings = { user: string; theme: string }

const SettingsContext = createContext<Settings>({ user: 'Ash', theme: 'light' })

const Row = memo(function Row({ index }: { index: number }) {
  const { user, theme } = useContext(SettingsContext)
  return (
    <div style={{ padding: 2 }}>
      #{index} · {user} · {theme}
    </div>
  )
})

const rows = Array.from({ length: 5000 }, (_, i) => i)

export default function ContextValueChurn() {
  const [count, setCount] = useState(0)
  const user = 'Ash'
  const theme = 'light'

  return (
    <SettingsContext.Provider value={{ user, theme }}>
      <button onClick={() => setCount((c) => c + 1)}>Tick: {count}</button>
      <div>
        {rows.map((i) => (
          <Row key={i} index={i} />
        ))}
      </div>
    </SettingsContext.Provider>
  )
}
