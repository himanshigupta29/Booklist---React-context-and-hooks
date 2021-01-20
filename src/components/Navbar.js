import React, {useContext} from 'react';
import { BooksContext } from '../contexts/BooksContext';


const Navbar = () => {

    // const {books, addBook, removeBook} = useContext(BooksContext);
    const {books} = useContext(BooksContext);

    return (
       <div className = "navbar">
            <h1>My Reading List</h1>      
            <p>Currently you have {books.length} books to go through ...</p>    
       </div>
    );

}


export default Navbar;