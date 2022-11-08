function Product(props) {
  function add() {
    props.addToCart(props.data);
  }
  return (
    <article className="Product">
      <h2>{props.data.productdisplayname}</h2>
      <p>{props.data.price},-</p>
      <img
        src={`https://kea-alt-del.dk/t7/images/webp/640/${props.data.id}.webp`}
        alt={props.data.productdisplayname}
      ></img>
      <button onClick={add}>ADD TO BASKET</button>
    </article>
  );
}

export default Product;

// {
// 	"id": 1163,
// 	"gender": "Men",
// 	"category": "Apparel",
// 	"subcategory": "Topwear",
// 	"articletype": "Tshirts",
// 	"season": "Summer",
// 	"productionyear": 2011,
// 	"usagetype": "Sports",
// 	"productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
// 	"price": 895,
// 	"discount": null,
// 	"brandname": "Nike",
// 	"soldout": 0
//   }
