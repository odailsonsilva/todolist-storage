import { z } from 'zod';

export const loginSchema = z.object({
    username: z.string().min(4, 'Username is required'),
    password: z.string().min(1, 'Password is required'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
