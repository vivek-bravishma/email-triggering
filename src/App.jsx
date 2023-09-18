import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import EmailTable from "./EmailPage";
import config from "./utils/config";

const userDetailsUrl = config.userDetailsUrl;
console.log(userDetailsUrl);

// const users = [
//   {
//     name: "Alex Mark",
//     email: "amarkcust@gmail.com",
//     userId: "alexsmithservices",
//     phone: "-",
//   },
//   {
//     name: "Vivek",
//     email: "vivekn@bravishma.com",
//     userId: "vivek",
//     phone: "-",
//   },
//   {
//     name: " ",
//     email: " ",
//     userId: " ",
//     phone: " ",
//   },
//   {
//     name: " ",
//     email: " ",
//     userId: " ",
//     phone: " ",
//   },
// ];

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(userDetailsUrl)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("Error fetching users==> ", error);
      });
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <div className="heading">OutBound Notifications</div>
      <EmailTable users={users} />
    </div>
  );
}

export default App;
