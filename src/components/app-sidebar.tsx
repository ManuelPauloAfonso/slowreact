import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { GithubIcon, SunIcon, MoonIcon, BookIcon } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'

const guide = [
  { path: '/docs/getting-started', label: 'Getting Started', icon: BookIcon },
]

const exercises = [
  { path: '/docs/01-unnecessary-rerenders', label: 'Unnecessary Re-renders' },
  { path: '/docs/02-bad-state-placement', label: 'Bad State Placement' },
  { path: '/docs/03-list-virtualization', label: 'List Virtualization' },
  { path: '/docs/04-heavy-bundle', label: 'Heavy Bundle' },
  { path: '/docs/05-slow-interactions', label: 'Slow Interactions' },
  { path: '/docs/06-costly-hydration', label: 'Costly Hydration' },
]

export function AppSidebar() {
  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    setDark(!dark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <Sidebar className="w-80">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-2xl tracking-tight text-[#FF7A37]">
            Slow React
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-mono text-[10px] uppercase tracking-[0.18em]">
            Guide
          </SidebarGroupLabel>
          <SidebarMenu>
            {guide.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton asChild>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 font-mono text-sm"
                  >
                    <item.icon className="size-4" />
                    {item.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="font-mono text-[10px] uppercase tracking-[0.18em]">
            Exercises
          </SidebarGroupLabel>
          <SidebarMenu>
            {exercises.map((ex) => (
              <SidebarMenuItem key={ex.path}>
                <SidebarMenuButton asChild>
                  <Link to={ex.path} className="font-mono text-sm">
                    {ex.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center justify-between">
          <a
            href="https://github.com/ManuelPauloAfonso/slowreact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <GithubIcon className="size-5" />
          </a>
          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {dark ? (
              <SunIcon className="size-5" />
            ) : (
              <MoonIcon className="size-5" />
            )}
          </button>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
