import Root from "@/component/Root";
import BookList from "@/page/BookList";
import BorrowSummary from "@/page/BorrowSummary";
import Home from "@/page/Home";
import {createBrowserRouter} from "react-router";
  

  
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
        {
            index: true,
            Component: Home,
        },

        {
         path: "all-books",
         Component: BookList,
        },
        {
          path: "borrow-summary",
          Component: BorrowSummary,
        }
          

      ]
    
    },
  ]);

  export default router;