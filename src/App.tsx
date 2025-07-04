
import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import BookList from './page/BookList'


function App() {


  return (
    <>
      <div className='flex  justify-center items-center h-screen'>
        <Navbar/>
        <BookList/>
        <Footer/>
    

       </div>
    </>
  )
}

export default App
