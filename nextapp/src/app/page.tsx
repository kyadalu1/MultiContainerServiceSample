"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

// export const revalidate = 0;

export default function Second() {
  const [value, setValue] = useState("");

  useEffect(() => {
    call();
  }, []);

  const call = async () => {
    const response = await fetch("/api/value", {
      cache: "no-cache",
    });
    const data = await response.json();
    console.log(data);
    setValue(data.value);
  };

  return (
    <main className={styles.main}>
      <h1>{value}</h1>
    </main>
  );
}
