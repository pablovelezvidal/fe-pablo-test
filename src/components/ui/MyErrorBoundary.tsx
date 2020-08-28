import * as React from "react";
import { Component } from "react";

class MyErrorBoundary extends Component {
  state = {
    errorMessage: "",
  };
  static getDerivedStateFromError(error: any) {
    return { errorMessage: error.toString() };
  }
  componentDidCatch(error: any, info: any) {
    console.log(
      "Boundary Error Catched: ",
      error.toString(),
      info.componentStack
    );
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <p>
          There was a Problem: {this.state.errorMessage} . Try to reload the
          page and make sure you have started the Server.
        </p>
      );
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;
