import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "./utils/config";

const emailApiUrl = config.emailApiUrl;

export default function EmailTable({ users }) {
  return (
    <div className="table-container">
      <Table>
        <Thead>
          <Tr>
            <Th className="name-heading table-heading">Name</Th>
            <Th className="email-heading table-heading">Email</Th>
            <Th className="phone-heading table-heading">Phone</Th>
            <Th className="actions-heading table-heading">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((ele, index) => (
            <TableRow user={ele} key={index} index={index} />
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

const TableRow = ({ user, index }) => {
  const sendEmailHandler = async () => {
    const loadingToaster = toast.loading("Sending Email...");
    try {
      let config = {
        method: "post",
        url: emailApiUrl,
        data: user,
      };
      let resp = await axios.request(config);
      toast.update(loadingToaster, {
        render: "Email Sent Successfuly",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      console.log("resp==> ", resp);
      // toast.success("Email Sent Successfuly");
    } catch (error) {
      // toast.error("Error Sending Email");
      toast.update(loadingToaster, {
        render: "Error Sending Email",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      console.log("error==> ", error);
    }
  };

  return (
    <Tr className={`table-row ${index % 2 === 0 ? "grey-bg" : "off-grey-bg"}`}>
      <Td>{user.name} </Td>
      <Td>
        <a href="mailto:webmaster@example.com">{user.email}</a>
      </Td>
      <Td>{user.phone}</Td>
      {user.email.trim() ? (
        <Td className="actions-container">
          <button onClick={sendEmailHandler}>
            <i className="fa-regular fa-envelope email-icon"></i>
          </button>
          <button>
            <i className="fa fa-phone phone-icon" aria-hidden="true"></i>
          </button>
          <button>
            <i className="fa-2x fa-brands fa-whatsapp whatsapp-icon"></i>
          </button>
        </Td>
      ) : (
        <Td></Td>
      )}
    </Tr>
  );
};

const EmptyRows = (num) => {
  return (
    <Tr>
      <Td></Td>
      <Td></Td>
      <Td></Td>
      <Td></Td>
    </Tr>
  );
};
