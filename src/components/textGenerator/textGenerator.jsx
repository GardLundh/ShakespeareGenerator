import React, { Component } from "react";

import data from "./text.json";
import Button from "react-bootstrap/Button";

import "./textGenerator.scss";

export default class TextGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "hello",
    };
  }

  componentDidMount() {
    this.getRandomText();
  }

  getRandomText = () => {
    const style = {
      fontFamily: "Grenze Gotisch",
      fontSize: "30px",
    };
    const rand = Math.floor(Math.random() * 99);
    const text = data[rand];
    const newText = text.split("\n").map((item, i) => {
      if (item === item.toUpperCase()) {
        const name = item.split(" ").map((capName) => {
          return this.Capitalize(capName) + " ";
        });
        return (
          <p key={i} style={style}>
            {name}
            {"\n"}
          </p>
        );
      }
      return <p key={i}>{item}</p>;
    });
    this.setState({ text: newText });
  };

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  render() {
    return (
      <div className="shakespeareText">
        <div className="button">
          <Button
            className="generateButton"
            variant="outline-dark"
            onClick={this.getRandomText}
          >
            Get new text
          </Button>
        </div>
        <div className="generatedText">{this.state.text}</div>
      </div>
    );
  }
}
