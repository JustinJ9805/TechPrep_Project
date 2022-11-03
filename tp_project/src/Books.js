import React from 'react';
import bookData from './bookData.json';

function Books(){
    return(
        <div>
            {
            bookData.map(books => {
                return(
                    <div className='box'>
                        <h3>Title::</h3>{books.title}
                        <h5>Author::</h5>{books.author}
                        <h5>ISBN::</h5>{books.ISBN}
                        <h5>Cost::</h5>{books.cost}

                    </div>
                    )
                }
            )
        }
        </div>
    )
}



export default Books;