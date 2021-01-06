import React, { Component, Fragment } from 'react'
import SearchLinks from './searchLinks'
import Li from './Li'
import ContainSearchProfile from './containSearchProfile'
import Example from './WebTools'
import '../css/search.css';
import googleEjemplo1 from '../sample/googleEjemplo1.JPG'
import busqueda from '../sample/busqueda.PNG'
import search from'../sample/search2.png';
import imagen from'../sample/imagen.png';
import video from'../sample/video.png';
import noticia from'../sample/noticia.png';
import map from'../sample/map.png';
import mas from'../sample/mas.png';
import configuraciones from'../sample/configuraciones.png';
import herramientas from'../sample/herramientas.png';
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
            <Fragment>
            <div style={{textAlign:"left"}} >
                <div className="row " style={{display:"inline"}}>
               
                <img id="googleEjemplo1" src={googleEjemplo1} alt="googleEjemplo" /><div  id="busqueda" for="inputd"  className=" d-flex justify-content-between align-items-center">  <input type="text"  className="col-sm-1" id="inputd" name="inputd" style={{borderRadius: "24px",width:"400px"}}/>< img className="col-auto"src={busqueda}  id="imgBusqueda" alt="busqueda"/> </div>
                </div>
                <ul className="ulSearchLinks">
                   <Li className="buttonGoogle" img={search} text={"Todo"}/>
                   <Li className="buttonGoogle" img={imagen} text={"Imágenes"}/>
                   <Li className="buttonGoogle" img={video} text={"Vídeos C.V"}/>
                   <Li className="buttonGoogle iconNoResponsive" img={noticia} text={"Noticias"}/>
                   <Li className="buttonGoogle iconNoResponsive" img={map} text={"Maps"}/>
                   <Li className="buttonGoogle iconNoResponsive" img={mas} text={"Más"}/>
                   <Li className="buttonGoogle iconNoResponsive" img={configuraciones} text={"Ajustes"}/>
                   <Li className="buttonGoogle iconNoResponsive" img={herramientas} text={"Herramientas"}/>
                </ul>
                <div className="row ">

                    <div className="col">
                        <div className="links"  onClick={this.onClick} ><SearchLinks h2="Perfil" p="quienes somos, para conocernos un poco mas" /></div>
                        <div className="links" onClick={this.onClickWeb} > <SearchLinks h2="Herramientas web" p="Te mostramos todas las herramientas que manejamos.
                        Y que podemos lograr con cada una" /></div>
                        <div className="links"><SearchLinks a="/portafolio" h2="Portfolio" p="Una pequeña muestra de nuestros proyectos, esperamos que les guste" /></div>
                    </div>
                    <div className="col">
                        <div hidden={this.state.hProfile}> <h1>  <ContainSearchProfile /></h1> </div>
                        <div hidden={this.state.hWebTools} className="col sm-4">   <Example /> </div>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
    
}
