import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="grid min-h-screen place-items-center bg-[#08080B]">
      <div className="rounded-xl border-[0.5px] border-[#212121] bg-gradient-to-b from-[#B3B3B3]/5 to-[#D4D4D4]/0 p-14 text-center">
        {children}
      </div>
    </main>
  );
}