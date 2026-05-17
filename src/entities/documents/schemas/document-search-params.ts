import { z } from 'zod';

export const documentSearchParams = z.object({
  page: z.int64().min(1n).optional().catch(1n),
  filter: z.string().optional(),
  sort: z.enum(['newest', 'oldest']).catch('newest')
});

export type DocumentSearch = z.infer<typeof documentSearchParams>;
