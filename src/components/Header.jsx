function Header({ count }) {
  const name = "Hero";
  return (
    <>
      <h2 className="header">Header : {count}</h2>
      <button>{name}</button>
    </>
  );
}
export default Header;

//return single value element-- single div, Empty fragment
// must close all tags
// instead of class we use className in react
// javascript expression or dynamic valye use korte hole {} use korte hobe
