function Basket(props) {
  return (
    <aside className="Basket">
      <ul>
        {props.cart.map((item) => (
          <li key={item.id}>
            {item.productdisplayname} x {item.amount},{" "}
            {item.price * item.amount},-{" "}
          </li>
        ))}
      </ul>
      <button>BUY NOW</button>
    </aside>
  );
}

export default Basket;
