import z from 'zod';

export const helloSchema = z.object({
  name: z.string('Name should be a string').min(1, 'Name is required'),
  email: z.email('Email is not valid'),
});

export type HelloBody = z.infer<typeof helloSchema>;
