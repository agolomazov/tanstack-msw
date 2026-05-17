import { useGetDocumentById } from '@api-queries/documents/use-get-document-by-id';
import { getDocumentByIdPathParamsSchema } from '@api/zod/documents-schema/get-document-by-id-schema';
import { Document } from '@entities/documents';
import { DocumentSkeleton } from '@entities/documents/ui/document-skeleton';
import { createFileRoute, notFound, useParams } from '@tanstack/react-router'
import { ErrorLoadingState } from '@widgets/errors/error-loading';
import { NotFound } from '@widgets/errors/not-found';

export const Route = createFileRoute('/_auth/documents/$documentId/')({
  component: RouteComponent,
  beforeLoad: ({ params }) => {
    const result = getDocumentByIdPathParamsSchema.safeParse(params);

    if (!result.success) {
      // console.log(result)
      throw notFound()
    }
  },
  notFoundComponent: () => <NotFound />
})

function RouteComponent() {
  const { documentId } = useParams({ from: '/_auth/documents/$documentId/' });
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

  return <Document document={documentInfo!} />
}
