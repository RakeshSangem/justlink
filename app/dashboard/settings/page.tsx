import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import PageClient from "./page-client";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/login");
    return;
  }
  return (
    <section className="relative w-full col-span-full mx-auto sm:px-8 flex">
      <MaxWidthWrapper>
        <PageClient />
      </MaxWidthWrapper>
    </section>
  );
}
