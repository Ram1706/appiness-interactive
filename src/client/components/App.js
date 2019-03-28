import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../../modules/store";
import Create from "./Create";
const reduxStore = configureStore();

export default class App extends React.PureComponent {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <Create />
        </div>
      </ReduxProvider>
    );
  }
}
