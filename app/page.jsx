import ProductCard from "../components/ProductCard";

export default function Home() {

  const products = [
    {
      name: "Mini Signature Gift",
      price: 1,
      description: "A small surprise for any moment."
    },
    {
      name: "Signature Collection Box",
      price: 20,
      description: "A premium collection of selected items."
    },
    {
      name: "Premium Signature Bundle",
      price: 50,
      description: "Our biggest and most exclusive bundle."
    }
  ];

  return (
    <main>

      <nav>
        <h2>SignatureMoments</h2>
        <button>Cart 🛒</button>
      </nav>


      <section className="hero">
        <h1>Moments Worth Remembering.</h1>
        <p>
          Premium products designed for special occasions.
        </p>
      </section>


      <section className="products">

        {products.map((product)=>(
          <ProductCard
            key={product.name}
            product={product}
          />
        ))}

      </section>

    </main>
  );
}
