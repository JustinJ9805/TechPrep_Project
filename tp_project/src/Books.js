import React from 'react';
import bookData from './bookData.json';


import './Books.css';

function Books(){



    return(
        <div className='books container-fluid'>
            <div className='row'>
            <br></br>
        
            {
            bookData.map(books => {
                return(
                    <div className='col-3'>
                        <div>
                            
                            <img  id={books.title} className='bookImg' src={books.imageLink} alt='unavailable'/>
                            <h5 className=''>{books.title}</h5>
                            <h5>${books.cost}</h5>
                            <button>Add to cart</button>
                        </div>
                        
                                           
                    </div>
                    )
                }
            )
        }
        </div>
        </div>
    )
}



export default Books;