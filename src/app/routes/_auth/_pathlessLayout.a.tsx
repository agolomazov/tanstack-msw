import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/_pathlessLayout/a')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Pathless A Page</h1>
    </div>
  )
}
