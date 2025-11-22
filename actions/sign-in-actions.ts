import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

type SignInActionsParams = {
  email: string;
  password: string;
};

export const signInActions = async ({
  email,
  password,
}: SignInActionsParams) => {
  const { data, error } = await authClient.signIn.email(
    {
      email,
      password,
      callbackURL: '/',
    },
    {
      onSuccess: ctx => {
        toast.success('Signed in successfully!');
        console.log(ctx);
      },
      onError: err => {
        toast.error(`Sign in failed: ${err.error.message}`);
        console.error(err);
      },
    }
  );
  console.log(data, error, 'actions');
};
