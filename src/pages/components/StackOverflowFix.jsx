// src/App.js
import React from "react";

class StackOverflowFix extends React.Component {
  generateError = () => {
    try {
      // This line will intentionally throw an error
      console.log("hello", error);
    } catch (error) {
      // Redirect to Stack Overflow with the error message
      const stackOverflowUrl = `https://stackoverflow.com/search?q=${encodeURIComponent(
        error.message
      )}`;

      console.log(stackOverflowUrl);
      console.log("redirect in 5 sec");
      setTimeout(() => {
        window.location.href = stackOverflowUrl;
      }, 5000);
    }
  };

  render() {
    return (
      <div>
        <h1>Error Generator @irshad</h1>
        <button onClick={this.generateError}>Generate Error</button>
      </div>
    );
  }
}

export default StackOverflowFix;
