"use client";

import {useContext} from "react";
import {CartContext} from "./CartContext";


export default function Cart(){

const {
cart,
removeFromCart,
total
}=useContext(CartContext);


return(

<div>

<h1>Your Cart</h1>


{
cart.map((item,index)=>(

<div key={index}>

<p>
{item.name} - ${item.price}
</p>

<button
onClick={()=>removeFromCart(index)}
>
Remove
</button>

</div>

))
}


<h2>
Total: ${total()}
</h2>


<button>
Checkout
</button>


</div>

);

}
