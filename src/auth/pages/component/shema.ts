import { z } from 'zod'

export const loginSchema = z.object({
  username: z.string().min(1, 'Campo requerido'),
  password: z.string().min(1, 'Campo requerido'),
})

export type LoginValues = z.infer<typeof loginSchema>
