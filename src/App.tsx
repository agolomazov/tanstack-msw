import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './generate/routes/route-tree.gen';
import { AuthProvider, useAuth } from './shared/context/auth';
import { ReactQueryProvider } from './app/providers/react-query-provider';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  basepath: '',
  context: {
    authentication: undefined!,
  }
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function InnerApp() {
  const authentication = useAuth();
  return <RouterProvider router={router} context={{ authentication }} />;
}

export const App = () => {
  return (
    <AuthProvider>
      <ReactQueryProvider>
        <InnerApp />
      </ReactQueryProvider>
    </AuthProvider>
  );
}