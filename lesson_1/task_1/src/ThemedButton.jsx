import React, { Component, useState } from "react";
import { ThemeContext } from "./themes";

class ThemedButton extends Component {
  render() {
      console.log( this.context.background)
    return (
      <button
        {...this.props}
        className="btn"
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor
        }}
      ></button>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
