import { Suspense } from "react";
import Counter from "./Counter";
import Cta from "./Cta";
import ProductCard from "./ProductCard";
import Users from "./Users";

const Body = ({ count, setCount }) => {
  const name = "CTA";
  const isLoggedIn = "true";
  const products = [
    { id: 1, name: "Mobile", price: 30000 },
    { id: 2, name: "Laptop", price: 60000 },
    { id: 3, name: "Headset", price: 3000 },
  ];
  const dataPromise = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  };

  return (
    <div>
      <h2> newsLetter</h2>
      <h2> card Section</h2>
      <Cta name={name} isLoggedIn={isLoggedIn} />
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))} */}
      <Counter count={count} setCount={setCount} />
      <Suspense fallback={<p>Loading...</p>}>
        <Users dataPromise={dataPromise()} />
      </Suspense>
    </div>
  );
};

export default Body;

// parent theke child data props akare pathate pari..
