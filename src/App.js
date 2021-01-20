import BooksContextProvider from "./contexts/BooksContext";
import Navbar from './components/Navbar';
import BookList from './components/BookList';


function App() {
  return (
    <div className="App">
      <BooksContextProvider>
        <Navbar></Navbar>
        <BookList></BookList>
      </BooksContextProvider>
    </div>
  );
}

export default App;
