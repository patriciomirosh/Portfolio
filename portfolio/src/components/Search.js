import React, { Component } from 'react'
import SearchLinks from './searchLinks'
import ContainSearchProfile from './containSearchProfile'
import Example from './WebTools'

export default class Search extends Component {
    constructor(args){
        super(args)
        
        this.state ={
         
         hProfile: true,
         hWebTools: true,
    
    }}
    onClick = ()=>{this.setState({hProfile:!this.state.hProfile, hWebTools:true
    })}
    onClickWeb = ()=>{this.setState({hWebTools:!this.state.hWebTools, hProfile:true })}
    render() {

        return (
            <div>
                <button onClick={this.onClick} ><SearchLinks h2="Perfil" p="quienes somos" /></button>
                <button onClick={this.onClickWeb} > <SearchLinks  h2="Herramientas web" p="Te mostramos todas las herramientas que manejamos. Y que podemos lograr con cada una" /></button>
                <SearchLinks a="portfolio" h2="Portfolio" p="Una pequeña muestra de todos nuestros proyectos" />
                <div hidden={this.state.hProfile}> <h1>  <ContainSearchProfile /></h1> </div>
                <div hidden={this.state.hWebTools} className="col sm-4">   <Example/> </div>
               
            </div>
        )
    }
}
