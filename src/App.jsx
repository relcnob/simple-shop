import { useEffect, useState } from "react";

import Header from "./components/header";
import Products from "./components/Products";
import Basket from "./components/Basket";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  function addToCart(data) {
    console.log("addToCart");
    if (cart.find((entry) => entry.id === data.id)) {
      setCart((oldCart) =>
        oldCart.map((entry) => {
          if (entry.id !== data.id) {
            return entry;
          }
          const copy = { ...entry };
          copy.amount = copy.amount + 1;
          return copy;
        })
      );
    } else {
      setCart((oldCart) => oldCart.concat({ ...data, amount: 1 }));
    }
  }
  function removeFromCart(id) {
    console.log("removing", id);
    setCart((oldCart) => {
      const subtracted = oldCart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      const filtered = subtracted.filter((item) => item.amount > 0);
      return filtered;
    });
  }
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
      <Products products={products} addToCart={addToCart} />
      <Basket products={products} cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
