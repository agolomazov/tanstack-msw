import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/settings/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Profile</h1>
      <p>settings form</p>
    </div>
  )
}
