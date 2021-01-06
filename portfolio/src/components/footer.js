import React, { Component } from "react";
import consultas from "../sample/iconsFooter/consultas.png";
import whatsapp from "../sample/iconsFooter/whatsapp.png";
import email from "../sample/iconsFooter/email.png";
import facebook from "../sample/iconsFooter/facebook.png";
// import linkedin from "../sample/iconsFooter/linkedin.png";

export default class Footer extends Component {
  constructor(args) {
    super(args);
    this.state = {
      contactMe: true,
      contact: [true, true, true],
    };
  }
  onClick = () => {
    this.setState({ contactMe: !this.state.contactMe });
  };

  render() {
    return (
      <footer>
        <div className="row">
          <div className="footcnt">
            <div className="fInfo">
              <span>Esto no es Google no te confundas</span>
            </div>
            <div className="fContact">
              <div>
                <button
                  className="btn btn-info row"
                  onClick={() => this.onClick()}
                >
                  {" "}
                  <img
                    src={consultas}
                    alt="consultas"
                    height="20px"
                    width="20px"
                  />
                  Contactanos
                </button>
              </div>
              <a
                href="https://drive.google.com/file/d/19LXQ6M5wKBnmYhXFNYKABPsBrvd-EMEt/view?usp=sharing"
                target="blank"
              >
                CV Melani{" "}
              </a>
              <a
                href="https://drive.google.com/file/d/1lYZYqV_D8s1rRT0p_HzzxVOxAs0Rriwt/view?usp=sharing"
                target="blank"
              >
                CV Patricio
              </a>
              <a
                href="https://www.linkedin.com/in/patricio-miroshnitshenko/"
                target="blank"
              >
                Linkedin Patricio Miroshnitshenko
              </a>
              <a
                href="https://www.linkedin.com/in/luraschimelani/"
                target="blank"
              >
                Linkedin Melani Luraschi
              </a>
            </div>
          </div>
        </div>

        <div
          hidden={this.state.contactMe}
          style={{ marginTop: "2em" }}
          className="row container-fluid"
        >
          <div style={{ marginTop: "1em" }} className="row container">
            <div className="col-sm-3">
              <button
                className="btn btn-info"
                onClick={() =>
                  this.setState({
                    contact: [!this.state.contact[0], true, true],
                  })
                }
              >
                <img alt="whatsapp" src={whatsapp} height="20px" width="20px" />
                <h5 hidden={this.state.contact[0]}>+54 3413504626</h5>
              </button>
            </div>
            <div className="col-sm-3">
              <button
                className="btn btn-info"
                onClick={() =>
                  this.setState({
                    contact: [true, !this.state.contact[1], true],
                  })
                }
              >
                <img alt="email" src={email} height="20px" width="20px" />
                <h5 hidden={this.state.contact[1]}>meelu15@gmail.com</h5>
              </button>
            </div>
            <div className="col-sm-6">
              <button
                className="btn btn-info"
                onClick={() =>
                  this.setState({
                    contact: [true, true, !this.state.contact[2]],
                  })
                }
              >
                <img alt="facebook" src={facebook} height="20px" width="20px" />
                <h5 hidden={this.state.contact[2]}>
                  https://www.facebook.com/patricio.pereyra.50/
                </h5>
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
