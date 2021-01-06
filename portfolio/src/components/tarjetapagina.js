import React, { Component } from 'react'

export default class TarjetaPagina extends Component {
    render() {
        return (
		<div className="col-md-4">
         <div className="card mb-4 text-white bg-dark">
            <img className="card-img-top" src={this.props.imgs} alt="Card cap"/>
            <div className="card-body">
               <h5 className="card-title">{this.props.title}</h5>
               <p className="card-text">{this.props.text}</p>
               <div><a href={this.props.a} target="_blank" rel="noreferrer" className="btn btn-light">Ir a la pagina</a></div>
               <div className="card-footer"></div>
            </div>
         </div>
      </div>
           
               
				
        
        )
    }
}
