function Product(props) {
  return (
    <article className="Product">
      <h2>{props.productdisplayname}</h2>
      <p>{props.price},-</p>
      <img
        src={`https://kea-alt-del.dk/t7/images/webp/640/${props.id}.webp`}
        alt={props.productdisplayname}
      ></img>
      <button>ADD TO BASKET</button>
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
