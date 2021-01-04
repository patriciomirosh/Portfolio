import React, { Component } from 'react'
import "../css/headerSearch.css";
import padlock from "../sample/padlock.png";
import arrowRight from "../sample/arrowRight.png";
import arrowLeft from"../sample/arrowLeft.png";
import cancel from"../sample/cancel.png";
import homepageNav from"../sample/homepageNav.png";
import favorite from"../sample/favorite.png";
export default class HeaderSearch extends Component {
    render() {
        return (
            <div className="row " id="headerSearch">
                <div className="col-sm-2" id="headerSearchF"><img  src={arrowLeft} alt="arrow Left" className="iconNav"/><img  src={arrowRight} alt="arrow Right" className="iconNav"/> <img  src={cancel} alt="cancel" className="iconNav"/> <img  src={homepageNav} alt="Homepage" className="iconNav"/></div> 
                <div className="col-sm-8" id="searchUrl"><img  src={padlock} alt="padlock" id="padlock"></img><p className="url">dasdasd</p>  <img  src={favorite} alt="Favorite Page" className="favorite"/></div> 
                <div className="col-sm-2"id="headerSearchS" ><p>dasdasd</p></div>
            </div>
        )
    }
}
