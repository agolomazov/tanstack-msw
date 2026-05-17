import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/blog/post/$postId/view')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = useParams({ from: '/_auth/blog/post/$postId/view' })

  return (
    <div>
      <h1>Просмотр страницы поста #{postId}</h1>
    </div>
  )
}
