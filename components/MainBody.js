import React from 'react';
const MainBody = (props) => {
const {booksData} = props
const books = booksData.map((book, index) => {
return (
<div className="card" style="width: 18rem;" key={index}>
  <img className="card-img-top" src={booksData.image} alt="Card image cap">
  <div className="card-body">
    <h5 className="card-title">{booksData.name}</h5>
    <p className="card-text">{booksData.description}</p>
    <p className="card-text">$ {booksData.price}</p>
    <p className="card-text">{booksData.pages} pages</p>
    <p className="card-text">{booksData.stock} in stock</p>
{/*    <p className="card-text">{booksData.description}</p>*/}
    <a href="#" className="btn btn-primary">Add to cart</a>
  </div>
</div>
)}
 )
return (
<div>{books}</div>
)
}
export default MainBody
