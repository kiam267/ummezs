'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { HalftoneDots } from '@paper-design/shaders-react';
import Loading from '@/components/common/loading';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { data: session, isPending } =
    authClient.useSession();

  useEffect(() => {
    if (session?.user?.id) {
      // Redirect client-side if logged in
      router.push('/');
    }
  }, [session, router]);

  if (isPending) {
    return <Loading />;
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <>{children}</>
      <div className="relative hidden bg-muted lg:block">
        <HalftoneDots
          className="w-full h-full p-5 opacity-90"
          image="/albert-einstein.jpg"
          colorBack="#f2f1e8"
          colorFront="#2b2b2b"
          originalColors={false}
          type="gooey"
          grid="hex"
          inverted={false}
          size={0.3}
          radius={1.25}
          contrast={0.4}
          grainMixer={0.2}
          grainOverlay={0.2}
          grainSize={0.5}
          fit="cover"
        />
      </div>
    </div>
  );
}
