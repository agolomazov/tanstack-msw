import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/faq')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>FAQ page</h1>
    </div>
  )
}
