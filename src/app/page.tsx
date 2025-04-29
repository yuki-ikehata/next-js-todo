import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import utilStyles from "./styles/utils.module.css";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className={styles.title}>TOPページです</h1>
        <Image src="/next.svg" alt="next.js" width={100} height={20} />
        <Link href="/about" className={utilStyles.headingXl}>Aboutページへ</Link>
        <Link href="/todo" className={utilStyles.headingXl}>Todoページへ</Link>
        <Link href="/blog" className={utilStyles.headingXl}>Blogページへ</Link>
      </div>
    </div>
  );
}
