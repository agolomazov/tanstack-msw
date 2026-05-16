import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/_pathlessLayout/b')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Pathless B Page</h1>
    </div>
  )
}
