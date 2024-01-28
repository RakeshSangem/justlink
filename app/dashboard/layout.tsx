import { ReactNode } from 'react';
import NavTabs from '@/components/nav-tabs';
import Providers from './providers';
import { MaxWidthWrapper } from '@/components/MaxWidthWrapper';
import Logout from '@/components/auth/Logout';
import { currentUser } from '@/lib/auth/auth';
import Image from 'next/image';
import { Button } from '@/components/button/Button';
import UserInfo from '@/components/UserInfo';

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const userInfo = await currentUser();

  return (
    <Providers>
      <section className="min-h-screen mx-auto">
        <div className="sticky top-0 left-0 right-0 z-30 border-b border-white/20 bg-black">
          <MaxWidthWrapper>
            <nav className="flex justify-between items-center w-full sm:px-8 py-4  bg-black">
              <span className="text-2xl font-bold">JustLink</span>
              {/* user avatar with the image and dropdown or popover */}
              {userInfo && <UserInfo user={userInfo} />}
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
