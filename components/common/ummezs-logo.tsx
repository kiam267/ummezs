import Link from 'next/link';

import { Icons } from '@/constants/Icons';

function UmmezsLogo() {
  return (
    <div className="flex justify-center gap-2 md:justify-start">
      <Link
        href="/"
        className="flex items-center gap-2 font-medium"
      >
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Icons.ummezs className="size-4" />
        </div>
        Ummezs
      </Link>
    </div>
  );
}

export default UmmezsLogo;
