import React, { type FC, Suspense } from 'react';

const ReactRouterDevtools: FC =
  process.env.NODE_ENV === 'development'
    ? React.lazy(async () =>
        import('@tanstack/react-router-devtools').then((result) => ({
          default: result.TanStackRouterDevtools,
        })),
      )
    : () => null;

export const TanstackRouterDevtools = () => (
  <Suspense>
    <ReactRouterDevtools />
  </Suspense>
);
