import React, { useState, useEffect } from 'react';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom'




    function ProductDetails({match,handleCart}) {
        
    const [item,setItem]=useState({})
    
    useEffect(()=>{
        
        fetchItem();
        
          },[])
    
    const fetchItem= async ()=>{
        const fetchItem= await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`, 
                      { 
                        method: 'get', 
                        headers: new Headers({
                        "Authorization": "e8dc5e3d7edc21ac2dcfd847d8d29eae"
                        }) })
        const item=await fetchItem.json();
        setItem(item.data.item)
        
    }
    
        
  
         
  
    
 
console.log("aaaaa")
   
  return (
    <div className="App">
          { item.images? <img  src={item.images.icon} alt="mak"/>:null}
                   <h2>{item.name}</h2>
                    <h3>{item.description}</h3>
                    <h3>{item.cost}</h3>
                    <h3>{item.type}</h3>
                    <h3>{item.rarity}</h3>
             { item.ratings?( <p>Average Stars: {item.ratings.avgStars} </p> ,
              <p> Votes numbers: {item.ratings.avgStars} </p>,<p>Total points: {item.ratings.totalPoints} </p>
                          ) :null}    
            { item.ratings?( 
                  <p> Votes numbers: {item.ratings.avgStars} </p>
                              ) :null}    
            { item.ratings?( <p>Total points: {item.ratings.totalPoints} </p>
                              ) :null}    
            

                  
  <button onClick={()=>{handleCart(item,match.params.id)}}>Add to cart</button>
        
                    
                </div>
  );
}

export default ProductDetails;
