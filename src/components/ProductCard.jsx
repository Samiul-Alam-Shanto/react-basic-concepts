const ProductCard = ({ product }) => {
  //   console.log(product);
  const { name, price } = product;
  return (
    <div className="card">
      <h2>Product Name : {name}</h2>
      <h4>Product Price : {price}</h4>
    </div>
  );
};

export default ProductCard;
