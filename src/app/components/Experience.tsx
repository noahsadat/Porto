import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "Langgroup",
    role: "Content & PIM Management",
    status: "Active",
  },
  {
    key: "2",
    name: "Freelance",
    role: "SwiftUI App Developement",
    status: "Active",
  },
  {
    key: "3",
    name: "IWETEC GmbH",
    role: "Sales",
    status: "Former",
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "status",
    label: "STATUS",
  },
];

export default function Experience() {
  return (
    <Table aria-label="Work Experience">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}