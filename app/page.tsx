import Navbar from '@/components/navbar/Navbar';

export default function Home() {
  return (
    <main className="w-screen h-screen max-w-7xl mx-auto">
      <Navbar />
      <section className="flex flex-col bg-gradient-to-b from-[#D4D4D4]/10 max-w-5xl to to-[#D4D4D4]/0 items-center justify-center w-5/6 mx-auto py-40 rounded-[40px]">
        <h1 className="text-6xl text-center font-semibold">
          One Link <br />
          <span className="bg-gradient-to-b from-white to-[#D4D4D4]/10 inline-block text-transparent bg-clip-text">
            endless possibilities
          </span>
        </h1>
        <div className="py-8 mt-10">
          {/* <p>Get Started...</p> */}
          <form
            action=""
            className="border border-gray-600 p-2 rounded-md flex items-center"
          >
            <span className="text-xl font-medium text-white/60">
              justlink.com/
            </span>
            <input
              className="bg-transparent outline-none border-none px-1 text-xl font-normal"
              type="text"
              placeholder="your-link "
            />
            <button className="bg-white text-black rounded-md px-5 py-1.5 font-medium">
              Generate
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
