import Logo from "@/components/Logo";
import NotFound from "../not-found";
import PageContent from "./PageContent";

export const dynamic = "force-dynamic";

interface Props {
  params: { username: string };
}

export default async function Page({ params }: Props) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_DOMAIN}/api/user/${params.username}`,
    {
      cache: "no-store",
    }
  );

  const user = await res.json();

  if (user.error) {
    return <NotFound />;
  }

  return (
    <main>
      <PageContent user={user} />
      <footer className="py-4 w-full flex flex-col justify-center bg-transparent">
        <a
          href={process.env.NEXT_PUBLIC_APP_DOMAIN}
          className="opacity-60 mx-auto hover:opacity-100 duration-200 transition ease-out"
        >
          <Logo />
        </a>
      </footer>
    </main>
  );
}
