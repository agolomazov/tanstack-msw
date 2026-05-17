import { useGetDocumentById } from '@api-queries/documents/use-get-document-by-id';
import { DocumentSkeleton } from '@entities/documents/ui/document-skeleton';
import { createFileRoute, useParams } from '@tanstack/react-router'
import { ErrorLoadingState } from '@widgets/errors/error-loading';
import { NotFound } from '@widgets/errors/not-found';

export const Route = createFileRoute('/_auth/documents/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id: documentId } = useParams({ from: '/_auth/documents/$id/' });
  const { data: documentInfo, isLoading, isError } = useGetDocumentById(Number(documentId));

  if (isError) {
    return (
      <ErrorLoadingState
        message={`Возникла неизвестная ошибка при загрузке документа #${documentId}`}
      />
    );
  }

  if (isLoading) {
    return (
      <DocumentSkeleton />
    );
  }

  if (!documentInfo) {
    <NotFound />
  }

  return <div>Document profile page</div>
}
