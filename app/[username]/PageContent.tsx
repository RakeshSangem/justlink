"use client";

import { themes } from "@/data/themes";

export default function PageContent({ user }: any) {
  const theme = themes.find(
    (theme) => theme.id === user?.user?.preferences?.theme
  );

  return (
    <main
      style={{ backgroundColor: theme?.bgColor }}
      className={`p-3 sm:p-10 mx-auto min-h-screen w-screen bg-[${theme?.bgColor}]`}
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
                target="_blank"
                key={link.id}
                href={link.url}
                style={{
                  backgroundColor: theme?.linkBgColor,
                  color: theme?.linkTextColor,
                  borderRadius: theme?.linkBorderRadius,
                  boxShadow: theme?.linkShadow,
                }}
                className={`cursor-pointer block w-full rounded-md bg-skin-btn-bg p-2.5 text-center font-medium text-skin-btn-text outline-offset-1 focus:outline-white/50 transition-all border duration-400 ease-out hover:scale-[1.015] outline-2 active:scale-100 border-skin-btn hover:border-skin-btnr`}
              >
                {link.title}
              </a>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
