import z from "zod";

export const documentCategoryPathParamsSchema = z.object({
  categoryId: z.uuid({ version: 'v4' })
});

export type DocumentCategoryPathParams = z.infer<typeof documentCategoryPathParamsSchema>;