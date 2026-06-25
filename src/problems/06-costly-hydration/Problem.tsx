import HeavySection from './heavysection'

function AboveTheFold() {
  return <div>Main content visible immediately</div>
}

function Sidebar() {
  return <div>Sidebar content</div>
}

export default function CostlyHydration() {
  return (
    <div>
      <AboveTheFold />
      <HeavySection />
      <Sidebar />
    </div>
  )
}
