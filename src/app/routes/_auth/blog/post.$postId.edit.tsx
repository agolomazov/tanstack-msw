import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/blog/post/$postId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = useParams({ from: '/_auth/blog/post/$postId/edit' });

  return (
    <div>
      <h1>Post edit form #{postId}</h1>
    </div>
  )
}
