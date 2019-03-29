import React, { Component } from "react";
import { TableCell, TableRow } from "@material-ui/core";

class TableDetails extends Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.user.id}</TableCell>

        <TableCell>{this.props.user.name}</TableCell>

        <TableCell>{this.props.user.age}</TableCell>

        <TableCell>{this.props.user.gender}</TableCell>

        <TableCell>{this.props.user.email}</TableCell>

        <TableCell>{this.props.user.phoneNo}</TableCell>
      </TableRow>
    );
  }
}

export default TableDetails;
