import LoadingSpinner from "@/components/icons/LoadingSpinner";

export default function Loading() {
  return (
    <section className="flex w-full items-center col-span-full h-[calc(70vh-20px)] justify-center mx-auto">
      <LoadingSpinner className="h-8 w-8" />
    </section>
  );
}
