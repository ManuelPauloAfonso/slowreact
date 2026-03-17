import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const tagVariant: Record<string, string> = {
  performance:
    'bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/10',
  state:
    'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/10',
  bundle:
    'bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/10',
  ssr: 'bg-violet-500/10 text-violet-400 border-violet-500/20 hover:bg-violet-500/10',
}

interface ExerciseCardProps {
  num: string
  title: string
  desc: string
  tag: string
  href: string
}

export function ExerciseCard({
  num,
  title,
  desc,
  tag,
  href,
}: ExerciseCardProps) {
  return (
    <a href={href} className="group block not-prose">
      <Card className="relative h-full transition-colors hover:border-orange-500/50 bg-card shadow-sm gap-3">
        <span className="absolute right-5 top-5 font-mono text-sm text-muted-foreground/20 transition-colors group-hover:text-orange-500">
          →
        </span>

        <CardHeader className="pb-0">
          <span className="font-mono text-[11px] text-muted-foreground/30 mb-1 block">
            {num}
          </span>
          <h3 className="font-sans text-[15px] font-semibold text-foreground leading-snug pr-6">
            {title}
          </h3>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <p className="font-sans text-sm text-muted-foreground leading-relaxed">
            {desc}
          </p>
          <Badge
            variant="outline"
            className={`self-start font-mono text-[10px] tracking-wide ${tagVariant[tag] ?? tagVariant.performance}`}
          >
            {tag}
          </Badge>
        </CardContent>
      </Card>
    </a>
  )
}
