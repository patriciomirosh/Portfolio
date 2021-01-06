import React, { Component } from "react";
import TypedReactDemo from "./main";
import imgNosotros from "../sample/nosotros.jpg";
import "../css/home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="containerGoogle">
        <div className="row">
          {" "}
          <div className="col-sm-10"></div>
          <div className="nosotros col-order-12 .ml-auto row" id="gmailImg">
            <p className="align-self-center">Gmail&nbsp;</p>

            <img id="nosotros" src={imgNosotros} alt="Nostros" />
          </div>
        </div>
        <div className="wrap">
          <h1><b style={{fontSize:"1.5em"}}><span style={{color:"#4285f4"}}>G</span><span style={{color:"#ea4335"}}>o</span><span style={{color:"#fbbc05"}}>m</span><span style={{color:"#4285f4"}}>y</span><span style={{color:"#34a853"}}>W</span><span style={{color:"#ea4335"}}>eb</span></b></h1>
          <div className="container">
            <div id="AutomaticText">
              {" "}
              <TypedReactDemo
                strings={[
                  " Desarrolladores Web <i>FullStack</i> ",
                  " <<strong>Luraschi</strong> Melani/>",
                  " <<strong>Miroshnitshenko</strong> Patricio/>",
                ]}
              />
            </div>
            <div className="row justify-content-center" style={{marginTop:"5%"}} >
            <button className="col-sm-3 btng">Me siento con suerte</button>
              <button className="col-sm-2 btng" style={{marginLeft:"1%"}}>Buscar con google</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
