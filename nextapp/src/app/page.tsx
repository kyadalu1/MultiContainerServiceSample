import styles from "./page.module.css";

export const revalidate = 0;

export default async function Home() {
  const response = await fetch("/getRandomNumber");
  const data = await response.json();
  console.log(data);

  return (
    <main className={styles.main}>
      <h1>{data.lastInfo.randomNumber}</h1>
    </main>
  );
}
