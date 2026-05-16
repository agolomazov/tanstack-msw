import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/posts/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Posts list</h1>
      <Link to="/blog/$postId/modal" params={{ postId: '2' }} mask={{
        to: '/blog/post/$postId/view',
        params: {
          postId: '2'
        }
      }}
      className='text-blue-500 underline hover:no-underline'
      >Open Post Into Modal</Link>
    </div>
  )
}
