
import { Card, CardContent } from "@/components/ui/card";
import type BookMock from "@/type-interfaces";
import { useState, useEffect } from "react";
import { Pencil, Trash2, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteItem } from "@/hook/deleteItem";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";





export default function BorrowSummary() {
  const [books, setBooks] = useState<BookMock[]>([]);

  useEffect(() =>  {
    const getBookdata = async () => {
      const response = await fetch("http://localhost:3000/api/borrowsummary");
      const data = await response.json();
      setBooks(data);
    }
    getBookdata();
  }, [books]);
  return (
    <div className="mt-20 min-h-screen  md:p-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-300 p-4">
      <h1 className="text-2xl font-bold text-white mb-6">Borrowed Books Summary</h1>

      <Card className="overflow-x-auto bg-white/5 backdrop-blur-md rounded-2xl shadow-xl">
        <CardContent className="p-0">
          <table className="min-w-full text-white">
            <thead className="bg-white/5">
              <tr>
                <th className="px-4 py-3 text-left">Book Title</th>
                <th className="px-4 py-3 text-left">ISBN</th>
                <th className="px-4 py-3 text-left">Total Quantity Borrowed</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {books.length > 0 ? books.map((book, index) => (
                <tr key={index} className="border-t border-white/10 hover:bg-white/5">
                  <td className="px-4 py-3">{book?.title}</td>
                  <td className="px-4 py-3">{book?.isbn}</td>
                  <td className="px-4 py-3">{book?.copies}</td>
                  { <td className="px-4 py-3">


                   <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-red-500"
                      onClick={() => deleteItem(book?.serial_id, "borrow")}
                    >
                      <Trash2 size={18} />
                    </Button>

<Dialog>
          <DialogTrigger asChild>
           
            <Button  variant="ghost" size="icon" className="hover:text-blue-400">
                      <Pencil size={18} />
                    </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <form>
              <DialogHeader>
                <DialogTitle>Add New Book</DialogTitle>
                <DialogDescription>Fill in the book details below.</DialogDescription>
              </DialogHeader>

              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    name="title"
                    value={book?.title}
                   
                    placeholder="e.g., Atomic Habits"
                    readOnly
                  />
                </div>
                

                
                <div className="grid gap-2">
                  <Label htmlFor="isbn">ISBN(Unique)</Label>
                  <Input
                    name="isbn"
                    value={book?.isbn}
                   
                    placeholder="e.g., 9780735211292"
                    readOnly
                  />
                </div>


                

                <div className="grid gap-2">
                  <Label htmlFor="copies">Available Copies</Label>
                  <Input
                    name="copies"
                    type="number"
                    min={0}
                    value={book?.copies}
                    
                    readOnly
                  />
                </div>
              </div>

              <DialogFooter className="pt-4">
                <DialogClose asChild>
                  <Button variant="ghost">Cancel</Button>
                </DialogClose>
                <Button type="submit" className="bg-green-700 text-white hover:bg-green-600">
                  Complete Borrow Book
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>


                    </td> }
                </tr>
              )):  
               <tr className="border-t border-white/10 hover:bg-white/5">

                <td className="px-4 py-3">No Borrowed Books</td>
                <td className="px-4 py-3">No Borrowed Books</td>
                <td className="px-4 py-3">No Borrowed Books</td>
               </tr>
               }
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
