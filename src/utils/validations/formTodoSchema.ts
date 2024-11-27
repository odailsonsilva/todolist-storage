import { z } from 'zod';

export const formTodoSchema = z.object({
    title: z.string().min(1),
});

export type FormTodoSchema = z.infer<typeof formTodoSchema>;
