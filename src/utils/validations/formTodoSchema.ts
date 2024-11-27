import { z } from 'zod';

export const formTodoSchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
});

export type FormTodoSchema = z.infer<typeof formTodoSchema>;
