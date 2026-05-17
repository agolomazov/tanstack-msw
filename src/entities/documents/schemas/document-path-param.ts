import z from "zod";

export const documentIdPathParam = z.object({
  categoryId: z.int32().min(1)
});

export type DocumentCategoryPathParams = z.infer<typeof documentIdPathParam>;