import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const BooksContext = createContext();

const BooksContextProvider = (props) => {

    const [books, setBooks] = useState([
        {title: 'The Glass Hotel', author: 'Emily Mandel', id: 1 },
        {title: 'Real Life', author: 'Brandon Taylor', id:2},
        {title: 'Wow, No Thank You', author: 'Samantha Irby', id: 3},
        {title: 'It\'s Not All Downhill From Here', author: 'Terry Mcmillan', id: 4},
        {title: 'The Vanishing Half', author: 'Brit Bennett',  id: 5},
    ]);

    const addBook = (title, author) => {

        setBooks([...books, {title, author, id: uuidv4() } ])

    };

    const removeBook = (id) => {
        
        setBooks(books.filter( book => book.id !== id ));

    }

    return (
        <BooksContext.Provider value = {{books, addBook, removeBook}}>
            {props.children}
        </BooksContext.Provider>

    );

}


export default BooksContextProvider;