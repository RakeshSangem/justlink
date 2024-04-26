export default function Loading() {
  return (
    <section className="relative w-full mx-auto px-2 col-span-3 sm:px-8 py-10 ">
      {/* Profile Skeleton */}
      <div className="relative overflow-hidden w-full rounded-lg bg-zinc-900 px-6 py-8">
        <div className="absolute animate-shimmer left-0 top-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-gray-200/10 to-transparent" />
        <div className="mx-auto flex w-4/5 items-center justify-center gap-x-12 px-5 py-2">
          <div className="h-[124px] w-[124px] shrink-0 overflow-hidden rounded-full border-2 border-white/20 bg-white/10" />
          {/*
            * we gonna use this if we change the profile layout
            *
            <div className="flex w-2/3 flex-col gap-y-5">
              <span className="h-8 rounded-md bg-[#D9D9D9]/10" />
              <span className="h-8 rounded-md bg-[#D9D9D9]/10" />
            </div> 
          */}
        </div>
        <div className="mt-4 flex flex-col gap-y-3">
          <span className="h-8 w-full rounded-md bg-[#D9D9D9]/10" />
          <span className="h-8 w-full rounded-md bg-[#D9D9D9]/10" />
        </div>
      </div>
    </section>
  );
}
