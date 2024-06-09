import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "画像最適化のテスト",
  description: "Next.js の output: 'export' における画像最適化のテスト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>{children}</body>
    </html>
  );
}
