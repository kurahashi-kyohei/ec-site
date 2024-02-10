import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow-inner mt-10">
      <nav className="flex flex-col items-center justify-between p-4 text-sm">
        <div className="flex mb-4">
          <Link href={"/"} className="flex items-center text-black">
            <span className="ml-2 font-serif">ブッチャー丸幸</span>
          </Link>
        </div>
        <div className="flex gap-4 mb-4">
          <Link href="/" className="text-black hover:text-gray-700">
            ホーム
          </Link>
          <Link href="/" className="text-black hover:text-gray-700">
            会社情報
          </Link>
          <Link href="/" className="text-black hover:text-gray-700">
            お問い合わせ
          </Link>
        </div>
        <div className="text-black">
          &copy; {new Date().getFullYear()} ブッチャー丸幸. All rights reserved.
        </div>
      </nav>
    </footer>
  );
};

export default Footer;