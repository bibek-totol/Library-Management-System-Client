import { useState } from "react";
import { Pencil, Trash2, BookOpen, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


interface BookMock {
    id: number;
    title: string;
    author: string;
    genre: string;
    isbn: string;
    copies: number;
    available: boolean;
}

const booksMock: BookMock[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    isbn: "9780743273565",
    copies: 3,
    available: true,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    isbn: "9780451524935",
    copies: 0,
    available: false,
  },

  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    isbn: "9780451524935",
    copies: 0,
    available: false,
  },


  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    isbn: "9780451524935",
    copies: 0,
    available: false,
  },


  {
    id: 5,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    isbn: "9780451524935",
    copies: 0,
    available: false,
  },
];

export default function BookList() {
  const [books, setBooks] = useState<BookMock[]>(booksMock);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this book?")) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  return (
    <div className="fixed top-0 bottom-2  p-4 w-full pb-40">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">All Books</h1>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2">
          <Plus size={20} /> Add New Book
        </Button>
      </div>

      <Card className="overflow-x-auto bg-sky-900 backdrop-blur-md rounded-2xl shadow-xl">
        <CardContent className="p-0">
          <table className="min-w-full text-white">
            <thead className="bg-white/5">
              <tr>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Author</th>
                <th className="px-4 py-3 text-left">Genre</th>
                <th className="px-4 py-3 text-left">ISBN</th>
                <th className="px-4 py-3 text-left">Copies</th>
                <th className="px-4 py-3 text-left">Availability</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id} className="border-t border-white/10 hover:bg-white/5">
                  <td className="px-4 py-3">{book.title}</td>
                  <td className="px-4 py-3">{book.author}</td>
                  <td className="px-4 py-3">{book.genre}</td>
                  <td className="px-4 py-3">{book.isbn}</td>
                  <td className="px-4 py-3">{book.copies}</td>
                  <td className="px-4 py-3">
                    {book.copies > 0 ? (
                      <span className="text-green-400">Available</span>
                    ) : (
                      <span className="text-red-400">Unavailable</span>
                    )}
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <Button variant="ghost" size="icon" className="hover:text-yellow-400">
                      <Pencil size={18} />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:text-red-500" onClick={() => handleDelete(book.id)}>
                      <Trash2 size={18} />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:text-blue-400">
                      <BookOpen size={18} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
