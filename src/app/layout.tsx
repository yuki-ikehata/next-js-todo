import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "./../app/styles/utils.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | TodoList App',
    default: 'TodoList App',  // デフォルトのタイトル
  },
  description: 'シンプルで使いやすいTodoリストアプリケーション',
};

const name = 'TodoList App';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={styles.container}>
          <header className={styles.header}>
            <Image src="/images/profile.png" alt="profile" width={100} height={100} className={`${utilStyles.borderCircle} ${styles.headerImage}`} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </header>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
