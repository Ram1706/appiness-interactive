import React from "react";
import { connect } from "react-redux";
import TableDetails from "./TableDetails";
import {
  Paper,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody
} from "@material-ui/core";

class Dashboard extends React.PureComponent {
  tabRow() {
    return this.props.userDetail.map(function(userDetailList, i) {
      return <TableDetails user={userDetailList} key={i} />;
    });
  }

  render() {
    return (
      <div className="container">
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>PhoneNo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.tabRow()}</TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userDetail: state.users
  };
};

export default connect(mapStateToProps)(Dashboard);
