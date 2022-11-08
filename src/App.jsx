import { useEffect, useState } from "react";

import Header from "./components/header";
import Products from "./components/Products";
import Basket from "./components/Basket";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const rest = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await rest.json();
      setProducts(data);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <Header />
      <Products products={products} />
      <Basket products={products} />
    </div>
  );
}

export default App;
