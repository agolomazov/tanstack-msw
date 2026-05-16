import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/settings/notifications')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Notifications</h1>
    </div>
  )
}
