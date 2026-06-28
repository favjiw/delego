// app/page.tsx

import Image from 'next/image';
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F9FB] border-b border-[#C7C4D8] px-15 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Delego Logo"
            width={24}
            height={24}
          />
          <span className="text-[20px] font-bold text-[#3525CD]">Delego</span>
        </div>
        <div className="flex items-center gap-8 text-gray-500 font-medium">
          <Link href="/features" className="text-[#464555] hover:text-[#3525CD] hover:underline hover:underline-offset-8 hover:decoration-2 hover:font-semibold">
            Features
          </Link>
          <Link href="/solutions" className="text-[#464555] hover:text-[#3525CD] hover:underline hover:underline-offset-8 hover:decoration-2 hover:font-semibold">
            Solutions
          </Link>
          <Link href="/contact" className="text-[#464555] hover:text-[#3525CD] hover:underline hover:underline-offset-8 hover:decoration-2 hover:font-semibold">
            Contact
          </Link>
        </div>
        <div className="flex space-x-4 items-center">
          <Link href="/login" className="text-[#464555] hover:text-[#3525CD] hover:font-semibold">
            Sign in
          </Link>
          <Link href="/register" className="bg-[#4F46E5] text-white px-6 py-2 rounded-sm font-medium hover:bg-indigo-700 transition-colors">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-8 py-24">
        <h1 className="text-5xl font-bold text-gray-900 max-w-2xl leading-tight">
          From meeting brief to delegated tasks{" "}
          <span className="text-indigo-600">in seconds</span>
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-xl">
          Paste your meeting notes, let AI extract and delegate tasks
          to the right divisions — automatically sent to Telegram.
        </p>
        <Link
          href="/register"
          className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Start for Free
        </Link>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-24 max-w-5xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="p-6 border border-gray-100 rounded-xl">
            <div className="text-3xl mb-4">{f.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm">{f.description}</p>
          </div>
        ))}
      </section>

    </main>
  );
}

const features = [
  {
    icon: "📋",
    title: "Paste your brief",
    description:
      "Input your raw meeting notes — as messy and long as they are. No formatting needed.",
  },
  {
    icon: "🤖",
    title: "AI maps to divisions",
    description:
      "Claude AI reads your divisions' job descriptions and assigns each task to the right team.",
  },
  {
    icon: "📨",
    title: "Sent to Telegram",
    description:
      "Approve the result and tasks are automatically sent to each division's Telegram group.",
  },
];