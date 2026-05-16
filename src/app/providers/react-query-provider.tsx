import type { FC, PropsWithChildren } from 'react';
import React from 'react';

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import('@tanstack/react-query-devtools/production').then((d) => ({
    default: d.ReactQueryDevtools,
  })),
);

const DEFAULT_RETRY_COUNT = 2;

const queryCache = new QueryCache({
  onError: (error, query) => {
    // Sentry.captureException(error, {
    //   tags: { queryKey: JSON.stringify(query.queryKey) },
    // });
    console.warn(error, query.queryKey)
  },
});

const mutationCache = new MutationCache({
  onError: (error, _, __, mutation) => {
    // Sentry.captureException(error, {
    //   tags: { mutationKey: JSON.stringify(mutation.options.mutationKey) },
    // });
    console.warn(error, mutation.options.mutationKey);
  },
});

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: DEFAULT_RETRY_COUNT,
    },
  },
  queryCache,
  mutationCache,
});

const shouldShowDevtools = true;

export const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
      {shouldShowDevtools && <ReactQueryDevtoolsProduction />}
      {children}
    </QueryClientProvider>
  );
};
