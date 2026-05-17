import { documentSearchParams } from '@pages/auth/documents/document-params';
import { createFileRoute } from '@tanstack/react-router';
import { useGetAllDocCategoriesV1 } from '@api-queries/documents/use-get-all-doc-categories-v1'
import { DocumentListCategorySkeleton, DocumentListCategory } from '@entities/documents';
import { ErrorLoadingState } from '@widgets/errors/error-loading';

export const Route = createFileRoute('/_auth/documents/')({
  component: RouteComponent,
  validateSearch: (search) => documentSearchParams.parse(search),
})

function RouteComponent() {
  const { data: docCategories, isError, isLoading } = useGetAllDocCategoriesV1();

  if (isError) {
    return (
      <ErrorLoadingState
        message='Не удалось загрузить категории документов'
      />
    );
  }

  if (isLoading) {
    return (
      <DocumentListCategorySkeleton count={5} />
    );
  }

  return (
    <DocumentListCategory content={docCategories?.content} />
  );
}
