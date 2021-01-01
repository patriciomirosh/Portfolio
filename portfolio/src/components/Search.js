import React, { Component } from 'react'
import SearchLinks from './searchLinks'
import ContainSearchProfile from './containSearchProfile'
import Example from './WebTools'
import googleNav from '../sample/googleNav.PNG'
import '../css/search.css'
import googleEjemplo from '../sample/googleEjemplo.PNG'
import busqueda from '../sample/busqueda.PNG'
export default class Search extends Component {
    constructor(args) {
        super(args)

        this.state = {

            hProfile: true,
            hWebTools: true,

        }
    }
    onClick = () => {
        this.setState({
            hProfile: !this.state.hProfile, hWebTools: true
        })
    }
    onClickWeb = () => { this.setState({ hWebTools: !this.state.hWebTools, hProfile: true }) }
    render() {

        return (
            <div style={{textAlign:"left"}}>
                <img src={googleEjemplo} />
                <div  id="busqueda" > <input /> <img src={busqueda}  /> </div>
                <div><img src={googleNav} width="100%" alt="googlenav bar" /></div>
                <div className="row ">

                    <div className="col">
                        <div className="links"  onClick={this.onClick} ><SearchLinks h2="Perfil" p="quienes somos, para conocernos un poco mas" /></div>
                        <div className="links" onClick={this.onClickWeb} > <SearchLinks h2="Herramientas web" p="Te mostramos todas las herramientas que manejamos.
                        Y que podemos lograr con cada una" /></div>
                        <div className="links"><SearchLinks a="portfolio" h2="Portfolio" p="Una pequeña muestra de nuestros proyectos, esperamos que les guste" /></div>
                    </div>
                    <div className="col">
                        <div hidden={this.state.hProfile}> <h1>  <ContainSearchProfile /></h1> </div>
                        <div hidden={this.state.hWebTools} className="col sm-4">   <Example /> </div>
                    </div>
                </div>
            </div>
        )
    }
    
}
