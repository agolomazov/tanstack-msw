import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/blog')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1 className='mb-4'>Blog layout</h1>
      <Outlet />
    </div>
  )
}
