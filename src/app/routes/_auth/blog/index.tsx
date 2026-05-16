import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/blog/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      List posts items
    </div>
  )
}
