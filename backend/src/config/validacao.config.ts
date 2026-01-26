import z from "zod";


// Esquema que utiliza o zod para validação 
const loginSchema = z.object({
    email: z.string(),
    senha: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
})
// Criamos uma typagem para o TS
export type LoginDTO = z.infer<typeof loginSchema>


