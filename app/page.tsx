import Navbar from '@/components/navbar/Navbar';
import CheckUsername from '@/components/CheckUsername';

export default function Home() {
  return (
    <main className="w-screen h-screen max-w-7xl mx-auto">
      <Navbar />
      <section className="flex flex-col bg-gradient-to-b from-[#D4D4D4]/10 max-w-5xl to to-[#D4D4D4]/0 items-center justify-center w-5/6 mx-auto py-40 rounded-[40px]">
        <h1 className="text-4xl sm:text-6xl text-center font-semibold">
          One Link <br />
          <span className="bg-gradient-to-b from-white to-[#D4D4D4]/10 inline-block text-transparent bg-clip-text">
            endless possibilities
          </span>
        </h1>
        <div className="py-8 mt-10">
          <CheckUsername />
        </div>
      </section>
    </main>
  );
}
