import Product from "./components/Product";
import Image from "next/image";
import { BookType, Purchase, User } from "./types/types";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "./lib/next-auth/options";
import { getAllProducts } from "./lib/microcms/client";

export default async function Home() {
  const session = await getServerSession(nextAuthOptions);
  const user = session?.user as User;
  const { contents } = await getAllProducts();

  let purchasesData = [];
  let purchasedIds: number[] = [];

  // if (user) {
  //   const response = await fetch(
  //     `${process.env.NEXT_PUBLIC_API_URL}/purchases/${user.id}`
  //   );

  //   purchasesData = await response.json();
  //   purchasedIds = purchasesData.map((purchase: Purchase) => purchase.bookId);
  // }

  return (
    <>
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/mv.jpeg"
          alt="Header Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <main className="flex flex-wrap justify-center items-center md:mt-16 mt-10">
        <h2 className="text-center w-full font-bold text-3xl mb-2">猫缶一覧</h2>
        {contents.map((product: BookType) => (
          <Product
            key={product.id}
            product={product}
            isPurchased={purchasedIds.includes(product.id)}
          />
        ))}
      </main>
    </>
  );
}




