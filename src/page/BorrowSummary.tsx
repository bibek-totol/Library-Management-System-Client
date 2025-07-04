
import { Card, CardContent } from "@/components/ui/card";

const borrowedSummaryMock = [
  {
    title: "The Great Gatsby",
    isbn: "9780743273565",
    totalBorrowed: 7,
  },
  {
    title: "1984",
    isbn: "9780451524935",
    totalBorrowed: 12,
  },
  {
    title: "To Kill a Mockingbird",
    isbn: "9780446310789",
    totalBorrowed: 5,
  },


  {
    title: "To Kill a Mockingbird",
    isbn: "9780446310789",
    totalBorrowed: 5,
  },



  {
    title: "To Kill a Mockingbird",
    isbn: "9780446310789",
    totalBorrowed: 5,
  },


  {
    title: "To Kill a Mockingbird",
    isbn: "9780446310789",
    totalBorrowed: 5,
  },




];

export default function BorrowSummary() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold text-white mb-6">Borrowed Books Summary</h1>

      <Card className="overflow-x-auto bg-sky-900 backdrop-blur-md rounded-2xl shadow-xl">
        <CardContent className="p-0">
          <table className="min-w-full text-white">
            <thead className="bg-white/5">
              <tr>
                <th className="px-4 py-3 text-left">Book Title</th>
                <th className="px-4 py-3 text-left">ISBN</th>
                <th className="px-4 py-3 text-left">Total Quantity Borrowed</th>
              </tr>
            </thead>
            <tbody>
              {borrowedSummaryMock.map((item, index) => (
                <tr key={index} className="border-t border-white/10 hover:bg-white/5">
                  <td className="px-4 py-3">{item.title}</td>
                  <td className="px-4 py-3">{item.isbn}</td>
                  <td className="px-4 py-3">{item.totalBorrowed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
