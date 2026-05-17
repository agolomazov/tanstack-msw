import { postPathParamsSchema } from '@pages/auth/blog/post-params';
import { createFileRoute, useParams, notFound } from '@tanstack/react-router';
import { NotFound } from '@widgets/errors/not-found';

export const Route = createFileRoute('/_auth/posts/$postId')({
  component: RouteComponent,
  beforeLoad: ({ params }) => {
    const result = postPathParamsSchema.safeParse(params);

    if (!result.success) {
      throw notFound()
    }
  },
  notFoundComponent: () => <NotFound />
})

function RouteComponent() {
  const { postId } = useParams({ from: '/_auth/posts/$postId' });

  return (
    <div>
      <h1>Post id page #{postId}</h1>
    </div>
  )
}
