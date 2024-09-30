import styles from "./page.module.css";
import {Client} from '@/app/components/Client';

export default async function Home() {
  const { content } = await (await fetch("http://node.plt.local", { cache: 'no-store' })).json();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        ${content}
        <Client />
      </main>
    </div>
  );
}

