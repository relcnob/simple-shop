import Product from "./Product";

function Products(props) {
  return (
    <main className="ProductList">
      {props.products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </main>
  );
}

export default Products;
