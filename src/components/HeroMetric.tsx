interface HeroMetricProps {
  value: string
  label: string
}

export function HeroMetric({ value, label }: HeroMetricProps) {
  return (
    <div className="flex flex-col gap-1 px-8 py-6">
      <span className="font-mono text-2xl font-bold text-orange-500">
        {value}
      </span>
      <span className="font-sans text-xs text-muted-foreground">{label}</span>
    </div>
  )
}
