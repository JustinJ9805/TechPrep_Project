import React from 'react';
import bookData from './bookData.json';
import './Books.css';



function Books(){
    return(
        <div>
            {
            bookData.map(books => {
                return(
                    <div className='container'>
                        <h5>Title: {books.title}</h5>
                        <h5>Author: {books.author}</h5>
                        <h5>ISBN: {books.ISBN}</h5>
                        <h5>Cost: {books.cost}</h5> 
                        <img src={books.imageLink} alt='unavailable' height={100} width={100} />
                    </div>
                    )
                }
            )
        }
        </div>
    )
}



export default Books;