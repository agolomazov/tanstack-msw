import { documentSearchParams } from '@pages/auth/documents/document-params';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/documents/')({
  component: RouteComponent,
  validateSearch: (search) => documentSearchParams.parse(search),
  
})

function RouteComponent() {
  return (
    <div>
      Список документов
    </div>
  );
}
