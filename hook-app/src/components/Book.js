import React, { useState } from 'react';

export default function Book() {
  const [book, setBook] = useState('Pro Express.js')
  const [books, setBooks] = useState([{title: 'Pro React 16'}]); 

  const addBook = () => {
    const updatedBooks = [...books, {title: book}];
    setBooks(updatedBooks);
  }

  return (
    <div className="row">
      <div className="col-sm-6">      
        <h3>State Hook</h3>    
        <p>{ book }  </p>
        <div className="list-group">
          { books.map((bk, index) => <span key={index} className="list-group-item">{ bk.title}</span>) }
        </div>
      </div>     
      <div className="col-sm-6">
       
        <div className="card">
          <h3 className="class-header text-center">Add Book</h3>
          <div className="card-body">
            <p>
              <input className="form-control" value={book} onChange={(event) => setBook(event.target.value)} />
            </p>
            <p>
              <input type="button" className="btn btn-primary form-control" value="Add Book" onClick={addBook} />
            </p>  
          </div>                     
        </div>
      </div>
    </div>
  )
}