import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/material-components-web/dist/material-components-web.min.css";
import "./css/App.css";
import "./css/footer.css";
import Footer from "./components/footer";
import Home from "./components/Home";
import React from "react";
import mic from './sample/mic.png'
import iconbuscar from './sample/iconbuscar.PNG'
import iconohome from './sample/iconohome.PNG'
import iconportafolio from './sample/iconportafolio.PNG'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import {useState} from "react";
import Search from "./components/Search";
import Portfolio from "./components/portfolio";



function App() {

  const [statePage, setStatePage] = useState(["rgb(71,146,230)","rgb(71,146,230)","rgb(71,146,230)"]);

  const colorPage= (array)=>{
    setStatePage(array)
  }
  
  return (
    <Router>
      <div className="container-fluid">
        <nav id="navBarrHome"className="row">
          <ul className="eyelashUl">
            <NavLink to="/">
              <li >
                <button onClick={()=>colorPage(["white","rgb(71,146,230)","rgb(71,146,230)"])} style={{backgroundColor:statePage[0],zIndex:"1000",border:"black"}}
                  className="eyelash" 
                >
                <img src={iconbuscar} alt="iconbuscar" height="15px" width="15px"  zIndex="1100"  className="align-self-center"  /> &nbsp;&nbsp; Inicio
                </button>
              </li>
            </NavLink>
            <NavLink to="/search">
              <li id="li2">
                <button onClick={()=>colorPage(["rgb(71,146,230)","white","rgb(71,146,230)"])} style={{backgroundColor:statePage[1],zIndex:"1000",border:"black" }}
                  className="
eyelash"
                >
                  <img src={iconohome} alt="iconohome" height="15px" width="15px"  zIndex="1100"  className="align-self-center" /> &nbsp;&nbsp;Search
                </button>
              </li>
            </NavLink>
            <NavLink to="/portfolio">
              {" "}
              <li id="li3">
                <button onClick={()=>colorPage(["rgb(71,146,230)","rgb(71,146,230)","white"])} style={{backgroundColor:statePage[2],zIndex:"1000",border:"black"}}
                  className="
eyelash"
                >
                  <img src={iconportafolio} alt="iconportafolio" height="15px" width="15px"  zIndex="1100"  className="align-self-center" /> &nbsp;&nbsp;Portfolio
                </button>
              </li>{" "}
            </NavLink>
          </ul>
        </nav>
      </div>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
            <Footer />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

