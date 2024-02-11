import { BookType } from "@/app/types/types";
import { MicroCMSQueries, createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});

export const getAllProducts = async () => {
  const allProducts = await client.getList<BookType>({
    endpoint: "ec-site-demo",
    queries: {
      offset: 0,
      limit: 10,
    },
  });

  return allProducts;
};

export const getDetailBook = async (contentId: string) => {
  const detailBook = await client.getListDetail<BookType>({
    endpoint: "ec-site-demo",
    contentId,
  });

  return detailBook;
};