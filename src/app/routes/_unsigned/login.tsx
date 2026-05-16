import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_unsigned/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_unsigned/login"!</div>
}
