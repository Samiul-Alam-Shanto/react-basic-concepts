import { use } from "react";

const Users = ({ dataPromise }) => {
  //   const [users, setUsers] = useState([]);
  const users = use(dataPromise);
  console.log(users);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setUsers(data));
  //   }, []);

  return (
    <div>
      <h3>Users :{users.length}</h3>
      {users.map((user) => (
        <p>UserCard</p>
      ))}
    </div>
  );
};

export default Users;
