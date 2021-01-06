import React, { Component } from "react";
import "../css/headerSearch.css";
import padlock from "../sample/padlock.png";
import arrowRight from "../sample/arrowRight.png";
import arrowLeft from "../sample/arrowLeft.png";
import recargar from "../sample/recargar.JPG";
import homepageNav from "../sample/homepageNav.png";
import favorite from "../sample/favorite.png";
import TypedReactDemo from "./main";
export default class HeaderSearch extends Component {
  render() {
    return (
      <div className="row " id="headerSearch">
        <div className="col-sm-2" >
          <div className="d-flex justify-content-between align-items-center"id="headerSearchF">
            <img src={arrowLeft} alt="arrow Left" className="iconNav" />
            <img src={arrowRight} alt="arrow Right" className="iconNav" />{" "}
            <img src={recargar} alt="recargar" className="iconNav" />{" "}
            <img src={homepageNav} alt="Homepage" className="iconNav" />
          </div>
        </div>
        <div className="col-sm-8 " id="searchUrl" style={{ display: "inline" }}>
          <div className="d-flex justify-content-between align-items-center">
            <p className="url">
              <img src={padlock} alt="padlock" id="padlock" />
              <TypedReactDemo
                strings={[
                  " github.com/patriciomirosh ",
                  "linkedin.com/in/luraschimelani/",
                  "linkedin.com/in/patricio-miroshnitshenko",
                  "github.com/MelanilLuraschi/",
                ]}
              />
            </p>
            <img src={favorite} alt="Favorite Page" className="favorite " />
          </div>
        </div>
        <div className="col-sm-2" id="headerSearchS">
          <p>Configuracion</p>
        </div>
      </div>
    );
  }
}
