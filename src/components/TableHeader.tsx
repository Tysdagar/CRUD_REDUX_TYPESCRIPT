import { TableHead, TableRow, TableHeaderCell } from "@tremor/react";

const TableHeader = () => {
  return (
    <TableHead
      style={{
        backgroundColor: "#f5f5f5",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TableRow>
        <TableHeaderCell>Username</TableHeaderCell>
        <TableHeaderCell>Phone</TableHeaderCell>
        <TableHeaderCell>Role</TableHeaderCell>
        <TableHeaderCell>Email</TableHeaderCell>
        <TableHeaderCell style={{ position: "sticky", top: "0" }}>
          Actions
        </TableHeaderCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
