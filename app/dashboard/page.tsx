import PageClient from "./page-client";
import LinksContainer from "./LinksContainer";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import MobileDeviceMockup from "@/components/DeviceMockup";

export default async function Page() {
  return (
    <section className="relative col-span-3 w-full mx-auto px-2 sm:px-8 flex">
      <div className="py-10 flex flex-col gap-y-4 w-full">
        <MaxWidthWrapper>
          <PageClient />
          <LinksContainer />
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
