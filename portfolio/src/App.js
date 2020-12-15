import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/footer.css';
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './components/Home'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Search from './components/Search';
import Portfolio from './components/portfolio';


function App() {
  return (
    
     <Router> 
       <div className="App">
        <div className="btn-group">
     <Link to="/" className='btn btn-dark'>
    Inicio
    </Link>
    <NavLink to="/search" className='btn btn-dark'>
    Search
    
    </NavLink>
    <NavLink to="/portfolio" className='btn btn-dark'>
    Portfolio
    </NavLink>

        </div>

       
    <Switch>
    <Route path='/' exact>
     <Nav/>
      <Home/>
    <Footer/>
    </Route>
    <Route path='/search'>
    <Search/>
    </Route>
    <Route path='/portfolio'>
     <Portfolio/>
    </Route>

    </Switch>
    </div>
    </Router>
    
   
  );
}

export default App;
