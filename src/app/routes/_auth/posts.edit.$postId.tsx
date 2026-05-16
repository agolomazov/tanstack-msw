import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/posts/edit/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Edit posts page</h1>
    </div>
  )
}
