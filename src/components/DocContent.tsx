interface DocContentProps {
  children: React.ReactNode
}

export default function DocContent({ children }: DocContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert prose-headings:text-left prose-p:text-left prose-li:text-left prose-headings:font-mono max-w-3xl mx-auto px-12 py-10">
      {children}
    </div>
  )
}
