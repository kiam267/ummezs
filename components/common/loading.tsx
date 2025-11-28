import { Loader2 } from 'lucide-react';


function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Loader2 className="size-5 animate-spin" />
    </div>
  );
}

export default Loading;
