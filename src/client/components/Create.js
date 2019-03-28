import React from "react";
import ACTIONS from "../../modules/action";
import { connect } from "react-redux";
import UserDetails from "../components/UserDetails";
import Login from "../components/Login";

class Create extends React.PureComponent {

  
  componentDidMount() {
    this.props.createItemForUsers(UserDetails);
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userDetail: state.users
  };
};

const mapDispatchToProps = dispatch => ({
  createItemForUsers: userDetails =>
    dispatch(ACTIONS.createItemForUsers(userDetails))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
