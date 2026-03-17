import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { Outlet } from '@tanstack/react-router'

export function DocsLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="flex-1 w-full">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
