import { signUpFormSchema } from './sign-up-schema';

export const signInFormSchema = signUpFormSchema.pick({
  email: true,
  password: true,
  
});
