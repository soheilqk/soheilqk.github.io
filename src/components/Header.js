import React, { Component } from "react";
import { ReactTyped } from "react-typed";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.title = this.props.sharedData.title;
    }

    return (
      <header id="home" style={{ height: "100vh", display: "block" }}>
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <span
                className="iconify header-icon"
                data-icon="la:laptop-code"
                data-inline="false"
              ></span>
              <br />
              <h1 className="mb-0">{name}</h1>
              <div className="title-container mb-4">
                <h1 className="title-styles mt-2">{this.title}</h1>
              </div>

              <a
                className="downloadCV"
                href="https://github.com/soheilqk/soheilqk/raw/main/Soheil%20Ghorbani%20CV.pdf"
                target="_blank"
              >
                Download CV
              </a>

              <div className="contactsRow">
                <div className="contactsColumn">
                  <span
                    style={{ height: "55px" }}
                    className="iconify"
                    data-icon="carbon:email"
                    data-width="48"
                  />
                  <span
                    style={{ height: "55px" }}
                    className="iconify"
                    data-icon="bi:phone"
                    data-width="48"
                  />
                  <span
                    style={{ height: "55px" }}
                    className="iconify"
                    data-icon="akar-icons:github-fill"
                    data-width="48"
                  ></span>
                  <span
                    style={{ height: "55px" }}
                    className="iconify"
                    data-icon="akar-icons:linkedin-box-fill"
                    data-width="48"
                  ></span>
                </div>

                <div className="contactsColumn">
                  <p className="contactsText mb-0">soheil.q.k@gmail.com</p>
                  <p className="contactsText mb-0">+46 76 596 1894</p>
                  <a
                    className="contactsText mb-0 contactsLink"
                    href="https://github.com/soheilqk"
                    target="_blank"
                  >
                    soheilqk
                  </a>
                  <a
                    className="contactsText mb-0 contactsLink"
                    href="https://www.linkedin.com/in/soheil-ghorbani-k"
                    target="_blank"
                  >
                    soheil-ghorbani-k
                  </a>
                </div>
              </div>
              {/* <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              /> */}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
