import LoadingSpinner from "@/components/icons/LoadingSpinner";

export default function Loading() {
  return (
    <section className="relative w-full mx-auto px-2 col-span-3 sm:px-8 py-10 grid place-items-center">
      <LoadingSpinner className="h-8 w-8" />
    </section>
  );
}
