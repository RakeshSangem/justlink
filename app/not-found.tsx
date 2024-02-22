import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen grid place-items-center bg-[#08080B]">
      <div className="rounded-xl border-[0.5px] border-[#212121] bg-gradient-to-b from-[#B3B3B3]/5 to-[#D4D4D4]/0 p-14 text-center px-28">
        <h1 className="text-white text-6xl font-semibold tracking-widest drop-shadow-md">
          404
        </h1>
        <p className="text-white/60 font-light text-base mt-2">
          This page could not be found.
        </p>

        <div className="py-10 space-y-2 flex flex-col gap-y-4">
          <Link
            className="bg-white inline text-black/80 rounded-md py-2 px-4 mt-5 text-sm font-medium hover:bg-opacity-90 transition-all duration-200 ease-out"
            href="/"
          >
            Go back home
          </Link>
        </div>
      </div>
    </section>
  );
}
