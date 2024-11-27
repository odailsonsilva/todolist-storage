import { z } from 'zod';

export const loginSchema = z.object({
    username: z.string().min(4, 'Nome de usuário obrigatório'),
    password: z.string().min(1, 'senha obrigatória'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
