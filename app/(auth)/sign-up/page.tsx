import UmmezsLogo from '@/components/common/ummezs-logo';
import { SignUpForm } from '@/components/form/sign-up-form';
import { GalleryVerticalEnd } from 'lucide-react';
import React from 'react';

function page() {
  return (
    <div className="flex flex-col gap-4 p-6 md:p-10">
      <UmmezsLogo />
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default page;
