import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from '@tanstack/react-router';

import type { AuthContextProps } from '@shared/context/auth';
import { TanstackRouterDevtools } from '../devtools/tanstack-router-devtools';

type RouterContext = {
  authentication: AuthContextProps;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: Root,
  notFoundComponent: () => (
    <>
      <h1>NOT FOUND PAGE - 404</h1>
    </>
  )
})

 
function Root() {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <TanstackRouterDevtools />
        <Scripts />
      </body>
    </html>
  )
}