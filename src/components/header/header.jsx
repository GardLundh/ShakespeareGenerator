import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.scss";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title">Generate Shakespeare</h1>
        <nav>
          <ul>
            <li className="home">
              <Link to="/">Home</Link>
            </li>
            <li className="about">
              <Link to="/about"> About</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
