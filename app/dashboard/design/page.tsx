import { Button } from '@/components/button/Button';

export default function Page() {
  return (
    <section className="w-full sm:w-1/2 py-5 flex flex-col gap-12">
      <div className="bg-zinc-900 rounded-lg px-6 py-8">
        <h3 className="text-lg font-normal pb-4">Profile</h3>
        <div className="flex px-5 w-4/5 mx-auto py-2 gap-x-12 items-center justify-between">
          <div className="w-[124px] shrink-0 h-[124px] border-2 border-white rounded-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdXDNSGjwJ1arYqlvYLMj2S8x1fhir6To_WA&usqp=CAU"
              alt="user avatar"
            />
          </div>
          <div className="flex flex-col gap-y-5 w-2/3">
            <Button text="Pick an Image" />
            <Button variant="secondary" text="Remove" />
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#D9D9D9]/5 w-full py-2 px-3 rounded-md"
          />
          <textarea
            placeholder="Bio..."
            className="bg-[#D9D9D9]/5 w-full py-2 px-3 rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
