import React, { Component } from "react";
import TypedReactDemo from "./main";
import imgNosotros from "../sample/nosotros.jpg";
import "../css/home.css";


export default class Home extends Component {
  render() {
    return (
      
      <div className="containerGoogle" >
        <div className="nosotros" >
          <p className="align-self-center">Gmail&nbsp;Imagenes</p>
         
<img id="nosotros" src={imgNosotros} alt="Nostros"/>
        </div>
        <div className="wrap">
        <h1>Google</h1>
        <div className="container" >
			<div id="AutomaticText"> <TypedReactDemo 
          strings={[
            " Desarrolladores Web <i>FullStack</i> ",
            " <<strong>Luraschi</strong> Melani/>",
            " <<strong>Miroshnitshenko</strong> Patricio/>",
          ]}
        />
      </div></div></div></div>
     
    );
  }
}
