import React from 'react';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Products from './Products'
import Cart from './cart'
import Home from './Home'
import ProductDetails from './ProductDetails'
class App extends React.Component {
    state={
        products:[],
        cart:[],
        totalPrice:0,
        product:{}
    }
    
    
    handleClick=(e)=>{
      
    
   let repeated=false
       const {cart}=this.state
       
       cart.forEach(item=>{
         
           if(item.itemId===e.itemId){
           
               item.quantity+=1;
               
               repeated=!repeated;
           }
          
       })
       
       if(!repeated) {
           cart.push(e)
       
         this.setState({cart:cart})
     }
            this.total()
    }
    handleCart=(item,id)=>{
      item.item={}
    
   let repeated=false
       const {cart,products}=this.state
       
       cart.forEach(item=>{
         
           if(item.itemId===id){
           
               item.quantity+=1;
               
               repeated=!repeated;
           }
          
       })
       
       if(!repeated) {
           products.forEach(item=>{
               if(item.itemId===id){
                          cart.push(item)
               }
           })
       
    
       
         this.setState({cart:cart})
     }
            this.total()
    }
    
    
    total=()=>{
        const {cart}=this.state
        let total=0
        let i=0;
        
        cart.forEach((item)=>{
            
          
                 if(item.store)total +=item.store.cost*item.quantity
                                
            else total+=item.cost*item.quantity
                 
            i++;
          
        } )
        
     
     return this.setState({totalPrice:total})
           
      
        
    }
    
    fetchProduct=(id)=>{
        
        this.setState({product:id})
                 
    }
      delete=(e)=>{
        const {cart}=this.state
        let c=0;
        
        for(let i=0;i<cart.length;i++){
            if(cart[i].itemId===e.itemId){
                 c=i;
                break
            }
           
        }

        cart[c].quantity=1;
        cart.splice(c,1)
        this.total()
        return this.setState({cart:cart})
        
    }
      
       handleChange=(event,cartItem)=> {
         const {cart}=this.state
       console.log(event.target)
         cart.forEach(item=>{
             if(item.itemId===cartItem.itemId){
              
              item.quantity=event.target.value
              console.log(item.quantity)
             }
         })
       this.setState({cart:cart});
         this.total()
  }
    
    
    componentDidMount(){
                fetch("https://fortnite-api.theapinetwork.com/store/get", 
                      { 
                        method: 'get', 
                        headers: new Headers({
                        "Authorization": "e8dc5e3d7edc21ac2dcfd847d8d29eae"
                        })
                        }).then(response => response.json())
                        .then(data => { data.data.forEach(item => {item.quantity=1});
                    this.setState({products:data.data})}
                             )
                
                
        
            }
handleProduct=(id)=>{
    console.log(id)
    this.setState({product:id})
    
}


    render(){
            const {products,cart,product}=this.state
        return (
    <div className="App">
     <header>
           
               <Link to='/store' ><h2>Mobile Store</h2></Link>
             <Link to='/store/products' ><h2>Products</h2></Link>
           
                 <Link to='/cart'><FontAwesomeIcon style={{color:'white',fontSize:'4em'}} icon={faShoppingCart} /> </Link>
           
            </header>
      <Switch>
        <Route path="/store" exact component={Home} />
        <Route path="/store/products" exact   render={(props)=>
           
                <div className="menu-items">
                     
                   {products.map(item => <Products item={item} key={item.itemId} handleClick={this.handleClick} {...props} />)}
            
            </div> 
        
                }/>
                
                 <Route path={`store/products/:id`}  render={(props)=> <ProductDetails {...props} handleCart={this.handleCart} product={product}/>} />
         <Route path="/cart" render={()=>
            <div className="cart-items">
                <h2 className="shoppingTxt">Shopping Cart</h2>
                <div className="cart-head">
                    <h3>Items</h3>
                    <h3>price</h3>
                
                </div>
                   {cart.map(item => <Cart item={item} key={item.itemId} handleChange={this.handleChange} delete={this.delete}/>)}
                <h2 className="total">Subtotal: ${this.state.totalPrice}</h2>
            
            </div>}/>
      
      
      </Switch>
    </div>
  );
}
        
    }
  

export default App;
