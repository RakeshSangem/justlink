export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const res = await fetch(`http://localhost:3000/api/links`);
  const links = await res.json();

  return (
    <div className="p-3 sm:p-10 max-w-2xl mx-auto min-h-screen">
      <div className="w-20 h-20 bg-red-300 rounded-full mx-auto my-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://avatars.githubusercontent.com/u/19484515?v=4"
          alt="avatar"
          className="w-20 h-20 bg-red-300 rounded-full mx-auto my-2"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4 text-center">{params.username}</h1>
      <p className="text-center">
        Fontend developer, I love to build things with React, Next.js and
        Tailwind CSS 🚀
      </p>

      {links &&
        links.map((link: any) => {
          return (
            <a
              href={link.url}
              target="_blank"
              className="bg-white block rounded-md text-center my-4 text-black px-10 sm:py-4 py-2"
              key={link._id}
            >
              {link.title}
            </a>
          );
        })}
      <br />
      <footer className="py-4 w-full flex justify-center">
        <button className="px-6 py-2 bg-white/80 rounded-md text-black mx-auto">
          Create your own profile <span>👉</span>
        </button>
      </footer>
    </div>
  );
}
