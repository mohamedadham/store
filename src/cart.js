import React from 'react';
import {Link} from 'react-router-dom'

class Cart extends React.Component {
   

  handle=(e)=>{
     this.props.handleChange(e,this.props.item)
   }
  
        render(){
            
            
            
            return(
            
            
                <div className="cart">
               
                
                <Link to={`store/products/${this.props.item.itemId}`}> <h2>{this.props.item.item.name }</h2> </Link>
                 
                <div className="cart-description">
                    <div className="cart-left">
                        <img src={this.props.item.item.images.icon} alt="product "/>
                        <p>{this.props.item.item.description } </p>
                    </div>
                    <h2 className="item-price">${this.props.item.store.cost }</h2>
                </div>
                 <div className="cart-bottom">
                <div className="quantity">
                <h3>Quantity</h3><select value={this.props.item.quantity} onChange={this.handle}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                  </select>
                </div>
                    <button onClick={()=>{this.props.delete(this.props.item)}}>Delete</button>
                </div>
     
                </div>
     
            
        )
   
        }
    
}
 


export default Cart;
