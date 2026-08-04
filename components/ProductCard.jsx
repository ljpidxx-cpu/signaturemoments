export default function ProductCard({product}) {

return (

<div className="card">

<h2>{product.name}</h2>

<p>
{product.description}
</p>

<h3>
${product.price}
</h3>

<button>
Add To Cart
</button>

</div>

);

}
