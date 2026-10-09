import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>This is a Simple React App</h2>
      <Header count={count}></Header>
      <Hero count={count} />
      <Body count={count} setCount={setCount} />
      <Footer />
    </>
  );
}

export default App;
// component
// always start with capital letter
// obossoi export korte hobe, jekhane use korbo sekhane import korte hobe
// jsx/ tsx .. jsx/tsx likhte parbo..
