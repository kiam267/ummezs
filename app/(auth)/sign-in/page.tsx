import { SignInForm } from '@/components/form/sign-in-form';

function page() {
  return (
    <div>
      <h1>Sign In Page</h1>
      <div className="flex items-center w-full justify-center h-screen">
        <SignInForm />
      </div>
    </div>
  );
}

export default page;
