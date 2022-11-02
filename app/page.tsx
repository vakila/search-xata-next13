import styles from "./page.module.css";
import Search from "./search";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Search Retro Games!</h1>

        <Search />
      </main>
    </div>
  );
}
