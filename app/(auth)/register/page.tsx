import RegisterClient from './register-client';

export default function Register() {
  return (
    <>
      <div className="border-b border-[#212121]/60 pb-2">
        <div className="mx-auto mb-6 h-10 w-10 rounded-full bg-gradient-to-bl from-blue-800 to-violet-900"></div>
        <h1 className="text-xl font-medium text-white/90">
          Create your JustLink account
        </h1>
        <p className="py-1 text-sm text-gray-600">Get started for free</p>
      </div>
      <RegisterClient />
    </>
  );
}
