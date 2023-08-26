import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const users = [
  {
    name: "Alex Mark",
    email: "alex@avayatoday.com",
    phone: "-",
  },
  {
    name: "Alex Mark",
    email: "alex@avayatoday.com",
    phone: "-",
  },
  {
    name: "Alex Mark",
    email: "alex@avayatoday.com",
    phone: "-",
  },
  {
    name: "Alex Mark",
    email: "alex@avayatoday.com",
    phone: "-",
  },
];

export default function EmailTable(props) {
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
  return (
    <Tr className={`table-row ${index % 2 === 0 ? "grey-bg" : "off-grey-bg"}`}>
      <Td>{user.name} </Td>
      <Td>
        <a href="mailto:webmaster@example.com">{user.email}</a>
      </Td>
      <Td>{user.phone}</Td>
      <Td className="actions-container">
        <button>
          <i className="fa-regular fa-envelope email-icon"></i>
        </button>
        <button>
          <i className="fa fa-phone phone-icon" aria-hidden="true"></i>
        </button>
        <button>
          <i className="fa-2x fa-brands fa-whatsapp whatsapp-icon"></i>
        </button>
      </Td>
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
