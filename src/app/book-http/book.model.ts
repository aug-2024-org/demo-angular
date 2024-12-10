export interface Book {
  id: number;
  bookTitle: string;
  bookAuthorId: number | null;
  bookCost: number | null;
  bookImageUrl: string;
}
