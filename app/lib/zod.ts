import z from "zod";

export const contactSchema = z.object({
    message : z
    .string()
    .min(2, { message : 'Message must have at least 2 characters'}),

    email : z
    .email({ message : 'Please enter a valid email address'}),

    subject : z
    .string()
    .min(5, {message : 'Subject must be at least 5 characters long'})
    .max(50, {message : 'Subject should be less than 50 characters'})
})