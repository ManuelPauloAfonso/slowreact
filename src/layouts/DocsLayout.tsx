import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { Outlet } from '@tanstack/react-router'

export function DocsLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="flex-1 px-12 py-10 max-w-4xl w-full mx-auto prose prose-neutral dark:prose-invert prose-headings:text-left prose-p:text-left prose-li:text-left">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
