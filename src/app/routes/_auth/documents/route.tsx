import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/documents')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      documents layout
      <Outlet />
    </div>
  )
}
