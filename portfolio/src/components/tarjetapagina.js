import React, { Component } from 'react'

export default class TarjetaPagina extends Component {
    render() {
        return (
		<div class="col-md-4">
         <div class="card mb-4 text-white bg-dark">
            <img class="card-img-top" src={this.props.imgs} alt="Card cap"/>
            <div class="card-body">
               <h5 class="card-title">{this.props.title}</h5>
               <p class="card-text">{this.props.text}</p>
               <div><a href={this.props.a} target="_blank" rel="noreferrer" className="btn btn-light">Ir a la pagina</a></div>
               <div class="card-footer"></div>
            </div>
         </div>
      </div>
           
               
				
        
        )
    }
}
