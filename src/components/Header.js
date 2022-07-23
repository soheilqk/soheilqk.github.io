import React, { Component } from "react";
import Typical from "react-typical";

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
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <div className="contactsRow">
            <Typical className="title-styles" steps={this.titles} loop={50} />
          </div>
        );
      },
      (props, prevProp) => true
    );

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
                <HeaderTitleTypeAnimation />
              </div>

              <a
                className="downloadCV"
                href="https://github.com/soheilqk/soheilqk/raw/main/soheil_Qorbani.pdf"
                target="_blank"
              >
                Download CV
              </a>

              <div className="contactsRow">
                <div className="contactsColumn">
                  <span
                    style={{ height: "55px" }}
                    class="iconify"
                    data-icon="carbon:email"
                    data-width="48"
                  />
                  <span
                    style={{ height: "55px" }}
                    class="iconify"
                    data-icon="bi:phone"
                    data-width="48"
                  />
                  <span
                    style={{ height: "55px" }}
                    class="iconify"
                    data-icon="akar-icons:github-fill"
                    data-width="48"
                  ></span>
                  <span
                    style={{ height: "55px" }}
                    class="iconify"
                    data-icon="akar-icons:linkedin-box-fill"
                    data-width="48"
                  ></span>
                </div>

                <div className="contactsColumn">
                  <p className="contactsText mb-0">soheil.q.k@gmail.com</p>
                  <p className="contactsText mb-0">+98 933 360 0933</p>
                  <a
                    className="contactsText mb-0 contactsLink"
                    href="https://github.com/soheilqk"
                    target="_blank"
                  >
                    soheilqk
                  </a>
                  <a
                    className="contactsText mb-0 contactsLink"
                    href="https://www.linkedin.com/in/soheil-qorbani"
                    target="_blank"
                  >
                    soheil-qorbani
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
