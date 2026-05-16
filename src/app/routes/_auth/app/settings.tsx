import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/app/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h1>App Settings content</h1>
  </div>
}
