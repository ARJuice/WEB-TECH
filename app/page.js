import Link from "next/link";

export const metadata = {
  title: "Home Page",
};

export default function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>
      <nav aria-label="Demo routes">
        <ul>
          <li>
            <Link href="/about">About Page</Link>
          </li>
          <li>
            <Link href="/blog/cats">Dynamic Blog Post</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/form">Form</Link>
          </li>
          <li>
            <Link href="/datafetch">Data Fetch Demo</Link>
          </li>
          <li>
            <Link href="/errorsolved">Error Demo</Link>
          </li>
          <li>
            <Link href="/waiting">Loading Demo</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}