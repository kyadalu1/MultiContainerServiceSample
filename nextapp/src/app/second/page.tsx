export const revalidate = 0;

export default async function Home() {
  const response = await fetch("http://nginx/api/value", {
    cache: "no-cache",
  });
  const data = await response.json();
  console.log(data);

  return (
    <main>
      <h1>{data.value}</h1>
    </main>
  );
}

//
