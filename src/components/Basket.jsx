function Basket(props) {
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
          </li>
        ))}
      </ul>
      <h3>TOTAL: {getTotal()}</h3>
      <button>BUY NOW</button>
    </aside>
  );
}

export default Basket;
