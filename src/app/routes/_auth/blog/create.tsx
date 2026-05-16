import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/blog/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Create post form</h1>
    </div>
  )
}
