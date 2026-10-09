const Cta = ({ name, isLoggedIn }) => {
  //   console.log(props);
  //   if (isLoggedIn === "true") {
  //     return <p>This is {name}</p>;
  //   } else return <h2>Please Login To see CTA Section</h2>;
  return (
    <>
      {isLoggedIn === "true" ? (
        <p>This is {name}</p>
      ) : (
        <h2>Please Login To see CTA Section</h2>
      )}
    </>
  );
  //   return (
  //     <div>
  //       <h2>{name}</h2>
  //       <Dummy name={name} />
  //     </div>
  //   );
};

export default Cta;
