import React from "react";
import ACTIONS from "../../modules/action";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Grid
} from "@material-ui/core";

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pwd: "",
      errormsg: "",
      open: false,
      loginsuccess: false
    };
    this.clearDetails = this.clearDetails.bind(this);
    this.showErrorModal = this.showErrorModal.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.displayLoginDetails = this.displayLoginDetails.bind(this);
    this.displayDashboard = this.displayDashboard.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  clearDetails() {
    this.setState({
      name: "",
      pwd: "",
      errormsg: "",
      open: false
    });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      errormsg: "",
      loginsuccess: false
    });
    const formDetails = {
      name: this.state.name,
      pwd: this.state.pwd
    };
    var errormsg = "";
    if (
      (formDetails.name === "" || formDetails.name.length <= 0) &&
      (formDetails.pwd === "" || formDetails.name.pwd <= 0)
    ) {
      errormsg = "Enter User name and password";
    } else if (formDetails.name === "" || formDetails.name.length <= 0) {
      errormsg = "Enter User name ";
    } else if (formDetails.pwd === "" || formDetails.name.pwd <= 0) {
      errormsg = "Enter Password ";
    } else {
      errormsg = "";
    }

    if (errormsg !== "") {
      this.setState({
        open: true,
        errormsg: errormsg
      });
    } else {
      this.props.createItem(formDetails);
      this.setState({
        loginsuccess: true
      });
    }
  };

  showErrorModal() {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please Fix the Following Error"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {this.state.errormsg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  displayLoginDetails() {
    return (
      <div style={{ marginTop: 50 }}>
        <Grid>
          <form>
            <div className="form-group">
              <label>User Name:</label>
              <input
                name="name"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                name="pwd"
                value={this.state.pwd}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <button className="btn btn-primary" onClick={e => this.onSubmit(e)}>
              Login
            </button>
          </form>
          {this.state.open && this.showErrorModal()}
        </Grid>
      </div>
    );
  }

  displayDashboard() {
    return <Dashboard />;
  }

  render() {
    return (
      <div>
        {!this.state.loginsuccess && this.displayLoginDetails()}
        {this.state.loginsuccess && this.displayDashboard()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(ACTIONS.createItem(item)),
  createItemForUsers: userDetails =>
    dispatch(ACTIONS.createItemForUsers(userDetails))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
