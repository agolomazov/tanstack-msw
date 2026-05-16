import { createFileRoute, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/posts/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = useParams({ from: '/_auth/posts/$postId' });

  return (
    <div>
      <h1>Post id page #{postId}</h1>
    </div>
  )
}
