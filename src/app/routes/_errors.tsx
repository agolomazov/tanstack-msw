import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_errors')({
  component: ErrorsContainer,
});

// eslint-disable-next-line react-refresh/only-export-components
function ErrorsContainer() {
  return (
    <Outlet />
  );
}
