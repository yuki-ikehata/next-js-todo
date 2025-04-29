import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Todo管理'
};

export default function TodoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}