import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
function Basket(props) {
  const [showForm, setShowForm] = useState(false);
  function getTotal() {
    let total = 0;
    props.cart.forEach((item) => {
      total = total + item.price * item.amount;
    });
    return total;
  }
  return (
    <aside className="Basket">
      <ul>
        {props.cart.map((item) => (
          <li key={item.id}>
            {item.productdisplayname} x {item.amount},{" "}
            {item.price * item.amount},-{" "}
            <button onClick={() => props.removeFromCart(item.id)}> X </button>
          </li>
        ))}
      </ul>
      <h3>TOTAL: {getTotal()}</h3>
      {!showForm && (
        <button
          onClick={() => {
            setShowForm(true);
          }}
        >
          BUY NOW
        </button>
      )}
      {showForm && <CheckoutForm cart={props.cart}></CheckoutForm>}
    </aside>
  );
}

export default Basket;
