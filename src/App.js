import BooksContextProvider from "./contexts/BooksContext";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BooksContextProvider>
        <Navbar></Navbar>
      </BooksContextProvider>
    </div>
  );
}

export default App;
