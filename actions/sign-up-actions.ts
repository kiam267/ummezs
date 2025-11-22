import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

type SignUpActionsParams = {
  email: string;
  password: string;
  username: string;
};

export const signInActions = async ({
  email,
  password,
  username,
}: SignUpActionsParams) => {
  const { data, error } = await authClient.signUp.email(
    {
      name: username,
      email,
      password,
      callbackURL: '/',
    },
    {
      onSuccess: ctx => {
        toast.success('Signed Up successfully!');
        console.log(ctx);
      },
      onError: err => {
        toast.error(`Sign up failed: ${err.error.message}`);
        console.error(err);
      },
    }
  );
};
