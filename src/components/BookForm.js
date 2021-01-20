import React, {useContext, useState} from 'react';
import {BooksContext} from '../contexts/BooksContext';

const BookForm = () => {


    const {addBook} = useContext(BooksContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');

    };




    return (
        <form onSubmit = { (e) => handleSubmit(e)}>

            <input type = "text" 
            required
            value = {title} 
            placeholder="Book title"
            onChange = { (e) => setTitle(e.target.value) } />

            <input type = "text"
            required
             value = {author}
             placeholder="Author"
             onChange = { (e) => setAuthor(e.target.value) } />

            <input type = "submit" value = "Add Book" />

        </form>
    );
}


export default BookForm;