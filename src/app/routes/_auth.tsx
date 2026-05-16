import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { Header } from '@widgets/navigation/header';

export const Route = createFileRoute('/_auth')({
  beforeLoad: async ({ context }) => {
    const { isLogged } = context.authentication;

    if (!isLogged) {
      throw redirect({
        to: '/login'
      });
    }
  },
  component: AuthenticatedContainer,
});

 
function AuthenticatedContainer() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}