import BooksContextProvider from "./contexts/BooksContext";
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';


function App() {
  return (
    <div className="App">
      <BooksContextProvider>
        <Navbar></Navbar>
        <BookList></BookList>
        <BookForm></BookForm>
      </BooksContextProvider>
    </div>
  );
}

export default App;
