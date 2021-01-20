import React, {useContext} from 'react';
import {BooksContext} from '../contexts/BooksContext';
import BookDetails from './BookDetails';

const BookList = () => {

    const {books} = useContext(BooksContext);

    return books.length ? (

        <div className="book-list">

            <ul>
            {
                books.map( book => <BookDetails key = {book.id} book = {book} ></BookDetails> )
            }
            </ul>

        </div> 

    ) : (

        <div className = "empty">
            No books to read... Add a new one ...
        </div>

    )
 
    
}

export default BookList;