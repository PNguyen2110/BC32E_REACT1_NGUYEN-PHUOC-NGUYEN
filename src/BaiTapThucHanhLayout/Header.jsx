import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="header bg-dark ">
        <div className="container  px-5">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
            <a className="navbar-brand" href="#">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse mr-auto"
              id="collapsibleNavbar "
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
