type BookType = {
  id: number;
  title: string;
  url: string;
  price: number;
  content: string;
  tag: string[];
  createdAt: string;
  updatedAt: string;
};

type Purchase = {
  id: string;
  userId: string;
  bookId: string;
  sessionId: string;
  createdAt: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  image: string;
};

export type { BookType, Purchase, User };