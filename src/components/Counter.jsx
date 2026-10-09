// import { useState } from "react";

const Counter = ({ count, setCount }) => {
  //   const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 10);
    console.log(count);
  };
  return (
    <div className="card">
      <h2>Count : {count}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Counter;
