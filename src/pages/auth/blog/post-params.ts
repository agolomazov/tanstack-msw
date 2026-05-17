import { z } from 'zod';

export const postPathParamsSchema = z.object({
  postId: z.uuidv4({ version: 'v4' })
});

export type PostPathParams = z.infer<typeof postPathParamsSchema>;