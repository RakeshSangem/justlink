import { ReactNode, use, useEffect } from "react";
import { currentUser } from "@/lib/auth/auth";

import Providers from "./providers";
import NavTabs from "@/components/nav-tabs";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import UserInfo from "@/components/UserInfo";
import Logo from "@/components/Logo";
import MobileDeviceMockup from "@/components/DeviceMockup";

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
            <nav className="flex justify-between items-center w-full sm:px-8 py-2 bg-black">
              <Logo />
              {userInfo && <UserInfo user={userInfo as any} />}
            </nav>
            <div className="max-w-7xl sm:px-8 mx-auto bg-black">
              <div className="w-full sm:w-1/2">
                <NavTabs />
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
        <MaxWidthWrapper>
          <div className="grid grid-flow-col grid-cols-5 relative">
            {children}
            <div className="col-span-2 mx-auto">
              <MobileDeviceMockup />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </Providers>
  );
}
