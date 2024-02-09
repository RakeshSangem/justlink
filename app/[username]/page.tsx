import Logo from '@/components/Logo';
import NotFound from '../not-found';

interface PageProps {
  params: { username: string };
}

export const dynamic = 'force-dynamic';

export default async function Page({ params }: PageProps) {
  console.log('params from page', params.username);

  const res = await fetch(`http://localhost:3000/api/user/rakeshsangem`, {
    cache: 'no-store',
  });

  console.log('res from page', res);

  const user = await res.json();

  console.log('user from page', user?.user?.links);

  // const { name, links, avatar } = user;

  // console.log('user from page', user);

  if (!user) {
    return <NotFound />;
  }

  return (
    <div className="p-3 mt-6 sm:p-10 max-w-2xl mx-auto min-h-screen">
      <div className="w-20 h-20 bg-red-300 rounded-full mx-auto my-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={user?.user?.avatar}
          alt="avatar"
          className="w-20 h-20 bg-red-300 rounded-full mx-auto my-2"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4 text-center">
        {user?.user?.name}
      </h1>
      <p className="text-center">{user?.user?.bio}</p>
      {user?.user?.links?.length > 0 && (
        <>
          {user?.user?.links.map((link: any) => (
            <a
              href={link.url}
              target="__blank"
              className="bg-white block rounded-md text-center my-4 text-black px-10 sm:py-2.5 py-2"
              key={link.id}
            >
              {link.title}
            </a>
          ))}
        </>
      )}
      <br />
      <footer className="py-4 w-full flex flex-col justify-center">
        <a
          href={`https://justlink.vercel.app`}
          className="opacity-60 w-min mx-auto hover:opacity-100 duration-200 transition ease-out"
        >
          <Logo />
        </a>
      </footer>
    </div>
  );
}
