import { useGetDocumentsCategoryById } from '@api-queries/documents/use-get-documents-category-by-id';
import { getDocumentsCategoryByIdPathParamsSchema } from '@api/zod/documents-schema/get-documents-category-by-id-schema';
import { CategoryDocumentsSkeleton, DocumentCategory } from '@entities/documents';
import { createFileRoute, notFound, useParams } from '@tanstack/react-router';
import { ErrorLoadingState } from '@widgets/errors/error-loading';
import { NotFound } from '@widgets/errors/not-found';

export const Route = createFileRoute('/_auth/documents/category/$categoryId')({
  component: RouteComponent,
  beforeLoad: ({ params }) => {
    const result = getDocumentsCategoryByIdPathParamsSchema.safeParse(params);

    if (!result.success) {
      throw notFound()
    }
  },
  notFoundComponent: () => <NotFound />
})

function RouteComponent() {
  const { categoryId } = useParams({ from: '/_auth/documents/category/$categoryId' });
  const { data: categoryInfo, isError, isLoading, error } = useGetDocumentsCategoryById(categoryId);

  if (isError) {
    if (error.response?.status.toString() === '404') {
      return (
        <NotFound />
      );
    }

    return (
      <ErrorLoadingState 
        message={'Произошла неизвестная ошибка при загрузке категории документов'}
      />
    );
  }

  if (isLoading) {
    return (
      <CategoryDocumentsSkeleton />
    )
  }

  return (
    categoryInfo && <DocumentCategory 
      category={categoryInfo.category}
      documents={categoryInfo.documents}
    />
  );
}
