import Link from "next/link";

export const metadata = {
  title: "Home Page",
};

export default function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        <Link href="/about">Go to About Page (Instant Nav)</Link>
      </p>
    </main>
  );
}