import React from "react";
import { connect } from "react-redux";
import TableDetails from './TableDetails';



class Dashboard extends React.PureComponent {

   tabRow(){
        return this.props.userDetail.map(function(userDetailList, i){
            return <TableDetails user={userDetailList} key={i} />;
        });
    }
 
  render() {
    return (
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Age</td>
                  <td>Gender</td>
                  <td>Email</td>
                  <td>phoneNo</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    userDetail: state.users
  };
};



export default connect(
  mapStateToProps
)(Dashboard);
