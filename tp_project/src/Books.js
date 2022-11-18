import React from 'react';
import bookData from './bookData.json';
import './Books.css';
    
function Books(){
    
    return(
        <div className='books container-fluid'>
            <br></br>
            <br></br>
            <div className='searchBar row'>
                <input type='text' placeholder='search...'></input>
            </div>
            <br></br>

            <div className='bookHeader row'>
                <h1>Search Results ...</h1>
            </div>
            <br></br>
        
            {
            bookData.map(books => {
                return(
                    
                    <div className='bookEntry row'>
                        
                        <img className='bookImg col-2' src={books.imageLink} alt='unavailable'/>
                        <div className='col'>
                            <h5 className='col bold'>{books.title}</h5>
                            <h5 className='col bold'> By: {books.author}</h5>
                            <br></br>
                            <h5 className='col bold'>ISBN-13: {books.ISBN}</h5>
                        </div>
                        <div className='col'>
                            <div className='row'>
                                <select>
                                    <option>Hardcover:{books.hardcoverPrice}</option>
                                    <option>Paperback:{books.paperbackPrice}</option>
                                    <option>PDF:{books.pdfPrice}</option>
                                    <option>Rent a Hardcover:</option>
                                    <option>Rent a Paperback:</option>
                                </select>
                                <br></br>
                                <select className='col-2'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                                <br></br>
                                <button className='books_button col bold'>Add to cart</button>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                    )
                }
            )
        }
        </div>
    )
}



export default Books;