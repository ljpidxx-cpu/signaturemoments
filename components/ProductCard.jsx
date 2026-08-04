"use client";

import {useContext} from "react";
import {CartContext} from "./CartContext";


export default function ProductCard({product}){

const {addToCart}=useContext(CartContext);


return(

<div className="card">

<h2>
{product.name}
</h2>

<p>
{product.description}
</p>

<h3>
${product.price}
</h3>


<button
onClick={()=>addToCart(product)}
>
Add To Cart
</button>


</div>

);

}
