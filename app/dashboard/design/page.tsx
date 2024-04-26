import { redirect } from "next/navigation";
import { auth } from "@/auth";

import DesignClient from "./design-client";

export default async function Page() {
  const session = await auth();

  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!session) {
    redirect("/login");
  }

  return (
    <section className="relative w-full mx-auto px-2 col-span-3 sm:px-8 flex">
      <div className="py-10 flex flex-col gap-y-4 w-full flex-1">
        <DesignClient />
      </div>
    </section>
  );
}
