import { ReactNode } from 'react';
import NavTabs from '@/components/nav-tabs';
import Providers from './providers';
import { MaxWidthWrapper } from '@/components/MaxWidthWrapper';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <section className="min-h-screen max-w-screen-xl mx-auto">
        <div className="sticky top-0 left-0 right-0 z-30 border-b border-b-gray-800 bg-black">
          <MaxWidthWrapper>
            <nav className="flex justify-between items-center w-full sm:px-8 py-4  bg-black">
              <span className="text-2xl font-bold">JustLink</span>
              <ul className="flex">
                <li className="mx-2">
                  <a href="/api/auth/logout">Logout</a>
                </li>
              </ul>
            </nav>
            <div className="max-w-7xl sm:px-8 mx-auto bg-black">
              <div className="w-full sm:w-1/2">
                <NavTabs />
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
        {children}
      </section>
    </Providers>
  );
}
