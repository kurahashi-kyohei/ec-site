import Product from "./components/Product";
import Image from "next/image";
import MvImg from "../../public/mv.jpeg";
// import { BookType } from "./types/types";

type BookType = {
  id: number;
  title: string;
  price: number;
  content: string;
  thumbnail: { url: string };
  createdAt: string;
  updatedAt: string;
  tag: [];
};

// 疑似データ
const products = [
  {
    id: 1,
    title: "カルビ",
    thumbnail: "../../public/item_1.jpg",
    price: 2980,
    content: "カルビです。",
    tag: ["焼肉"],
    created_at: new Date().toString(),
    updated_at: new Date().toString(),
  },
  {
    id: 2,
    title: "サーロイン",
    thumbnail: "/public/meat/item_2.jpeg",
    price: 1980,
    content: "サーロインの詳細情報です",
    tag: ["焼肉"],
    created_at: new Date().toString(),
    updated_at: new Date().toString(),
  },
  {
    id: 3,
    title: "ロース",
    price: 4980,
    thumbnail: "@/public/meat/item_3.jpg",
    content: "ロースの詳細情報です",
    tag: ["焼肉"],
    created_at: new Date().toString(),
    updated_at: new Date().toString(),
  },
];

export default async function Home() {

  return (
    <>
      <div className="relative w-full h-64 md:h-96">
        <Image
          src={MvImg}
          alt="Header Image"
          layout="fill"
          objectFit="cover"
        />
        {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            - キャッチフレーズ -
          </h1>
        </div> */}
      </div>

      <main className="flex flex-wrap justify-center items-center md:mt-16 mt-10">
        <h2 className="text-center w-full font-bold text-3xl mb-2">商品一覧</h2>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            isPurchased={true}
          />
        ))}
      </main>
    </>
  );
}


