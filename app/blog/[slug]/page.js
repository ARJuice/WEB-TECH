export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return (
    <main>
      <h1>Reading post: {slug}</h1>
    </main>
  );
}