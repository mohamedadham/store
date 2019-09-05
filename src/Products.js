import React from 'react';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom'
import ProductDetails from './ProductDetails'
import Home from './Home'

function Products({item,match,handleClick}) {
  
   console.log(match)
  return (
    <div className="item">
                    <h2>{item.item.name }</h2>
                     <img src={item.item.images.icon} alt={item.item.images.information}/>
                    <p>{item.item.description } </p>
                    <p>${item.store.cost }</p>
                   <li>
                        <Link to={`${match.url}/${item.itemId}`}> View </Link>
                        </li>
                <button onClick={()=>{handleClick(item)}}>Add to cart</button>
     
               

                    
                </div>

        
  );
}

export default Products;
