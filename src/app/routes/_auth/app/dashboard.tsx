import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/app/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h1>App dashboard content</h1>
  </div>
}
