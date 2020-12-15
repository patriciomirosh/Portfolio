import React, { Component,useState,Fragment } from 'react'
export default class Portfolio extends Component {
    constructor(args){
        super(args)
        
        this.state ={
         
         page: true,
         app: true,
         ad: true,
         ml: true,
         ing: true,
         proyectsWe:[ true,true,false

         ]

        }}
        
        onClick = ()=>{
            
        } 
     


         
    render() {
        return (
            <Fragment>
            <div className="row">
                <div  className="col sm-5" border-style="solid">
                <ul>
                    <li><button className="btn btn-info" onClick={()=>this.setState({page:!this.state.page,app:false,ad:false,ml:false,ing:false})}>Paginas Web</button></li>
                    <li><button className="btn btn-info" onClick={()=>this.setState({app:!this.state.app,page:false,ad:false,ml:false,ing:false})}>Aplicaciones Full Stack</button></li>
                    <li><button className="btn btn-info" onClick={()=>this.setState({ad:!this.state.ad,app:false,page:false,ml:false,ing:false})}>Analisis de Datos</button></li>   
                    <li><button className="btn btn-info" onClick={()=>this.setState({ml:!this.state.ml,app:false,ad:false,page:false,ing:false})}>Machine Learning</button></li>
                    <li><button className="btn btn-info" onClick={()=>this.setState({ing:!this.state.ing,app:false,ad:false,ml:false,page:false})}>Ingenieria</button></li>
                    </ul> 
                </div>
                <div  className="col sm-5">
                    <div className="row"><button onClick={this.onClick.bind(this)} name="0">Proyecto1</button><button onClick={this.onClick.bind(this)} name="1">Proyecto2</button><button onClick={this.onClick.bind(this)} name="2">Proyecto3</button></div>
                    <div hidden={this.state.page && !this.state.app && !this.state.ad && !this.state.ml && !this.state.ing ?false:true}> <iframe src="https://drive.google.com/file/d/1tYYJyyob-a3XY7A24y7k6qRJTbwPbm14/preview" title="Paginas Web" ></iframe></div>
                    <div hidden={this.state.app && !this.state.page && !this.state.ad && !this.state.ml && !this.state.ing ?false:true}> <iframe src="https://drive.google.com/file/d/1tYYJyyob-a3XY7A24y7k6qRJTbwPbm14/preview" title="Paginas Web" ></iframe></div>
                    <div hidden="true"> <iframe src="https://drive.google.com/file/d/1tYYJyyob-a3XY7A24y7k6qRJTbwPbm14/preview" title="Paginas Web" ></iframe></div>
                   
                {/* diferentes proyectos */}

                </div>
            </div>
            </Fragment>
        )
    }
}
