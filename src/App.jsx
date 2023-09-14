import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import EmailTable from "./EmailPage";

const userDetailsUrl =
  "https://gitex2023configuration.lab.bravishma.com/Email/UserDetails.json";

// const emailApiUrl = "http://localhost:3010/email/send";
const emailApiUrl =
  "https://us-central1-nipon-test-350808.cloudfunctions.net/govservEmail";

// const users = [
//   {
//     name: "Alex Mark",
//     email: "amarkcust@gmail.com",
//     userId: "alexsmithservices",
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
      <EmailTable users={users} emailApiUrl={emailApiUrl} />
    </div>
  );
}

export default App;
