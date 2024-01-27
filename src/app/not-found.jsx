import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10">
      <img src="/404-page-not-found.png" height="300" width="300" alt="" />
      <Link href="/">
        <button className="rounded-md bg-teal-500 px-3 py-2 text-white hover:bg-teal-600">
          Go To Home
        </button>
      </Link>
    </div>
  );
}
