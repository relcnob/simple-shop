import Product from "./Product";

function Products(props) {
  return (
    <main className="ProductList">
      {props.products.map((product) => (
        <Product key={product.id} data={product} addToCart={props.addToCart} />
      ))}
    </main>
  );
}

export default Products;
