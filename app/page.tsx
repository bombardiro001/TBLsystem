import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-neutral-900">
      <h1 className="text-4xl font-bold text-white">
        TBL — The Barber’s Lounge ✂️
      </h1>

      <Link
        href="/login"
        className="rounded bg-white px-6 py-3 font-semibold text-neutral-900 transition hover:bg-gray-200"
      >
        Login
      </Link>
    </main>
  );
}
