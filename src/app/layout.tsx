
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "./components/Footer";

const notoSansJP = Noto_Sans_JP({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ブッチャー丸幸",
  description: "精肉店のブッチャー丸幸です。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
      </body>
    </html>
  );
}


