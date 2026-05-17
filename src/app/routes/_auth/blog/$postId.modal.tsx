import { createFileRoute, Link, useParams, useBlocker } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/blog/$postId/modal')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = useParams({ from: '/_auth/blog/$postId/modal' })

  useBlocker({
    shouldBlockFn: () => {
      const shouldLeave = confirm('Вы уверены что хотите покинуть страницу?');

      return !shouldLeave;
    }
  })

  return (
    <div className='border border-gray-200 p-4 rounded-2xl'>
      Просмотр поста блога в модальном окне #{postId}

      <p>
        <Link to="/posts" className='text-blue-500 underline hover:no-underline'>Вернуться назад</Link>
      </p>
    </div>
  )
}
