import Logo from '@/components/Logo';
import NotFound from '../not-found';
import { title } from 'process';

interface Props {
  params: { username: string };
}

export const dynamic = 'force-dynamic';

export default async function Page({ params }: Props) {
  const res = await fetch(`http://localhost:3000/api/user/rakeshsangem`, {
    cache: 'no-store',
  });

  const user = await res.json();

  if (!user) {
    return <NotFound />;
  }

  return (
    <main
      className={`p-3 sm:p-10 mx-auto min-h-screen w-screen bg-skin-bg ${user?.theme}`}
    >
      <section className="max-w-2xl mt-6 mx-auto">
        <div className="w-20 h-20 bg-red-300 rounded-full mx-auto my-4 outline outline-[0.5px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={user?.user?.avatar}
            alt="avatar"
            className="w-20 h-20 bg-red-300 rounded-full mx-auto my-2"
          />
        </div>
        <h1 className="text-2xl font-medium text-page-title text-center">
          {user?.user?.name}
        </h1>
        <p className="text-center font-light mt-2 text-white/80">
          {user?.user?.bio}
        </p>
        {user?.user?.links?.length > 0 && (
          <ul className="space-y-5 my-8">
            {user?.user?.links.map((link: any) => (
              <a
                href={link?.url}
                target="__blank"
                className="cursor-pointer block w-full rounded-md bg-skin-btn-bg p-2.5 text-center font-medium text-skin-btn-text outline-offset-1 focus:outline-white/50 transition-all border duration-400 ease-out hover:scale-[1.015] outline-2 active:scale-100 border-skin-btn hover:border-skin-btn"
                key={link?.id}
              >
                {link?.title}
              </a>
            ))}
          </ul>
        )}
        <footer className="py-4 w-full flex flex-col justify-center">
          <a
            href={`localhost:3000`}
            className="opacity-60 mx-auto hover:opacity-100 duration-200 transition ease-out"
          >
            <Logo />
          </a>
        </footer>
      </section>
    </main>
  );
}
