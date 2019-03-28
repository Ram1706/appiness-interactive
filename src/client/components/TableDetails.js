import React, { Component } from 'react';

class TableDetails extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.user.id}
          </td>
          <td>
            {this.props.user.name}
          </td>
          <td>
            {this.props.user.age}
          </td>
          <td>
            {this.props.user.gender}
          </td>
          <td>
            {this.props.user.email}
          </td>
          <td>
            {this.props.user.phoneNo}
          </td>
        </tr>
    );
  }
}

export default TableDetails;