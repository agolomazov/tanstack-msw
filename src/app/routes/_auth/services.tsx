import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/services')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Services page</h1>
    </div>
  )
}
