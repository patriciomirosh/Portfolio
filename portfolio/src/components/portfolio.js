import React, { Component, Fragment } from 'react'
import TarjetaPagina from '../components/tarjetapagina'
import GoAdiestramiento from '../sample/Goadiestramiento.PNG'
import MimundoEncantado from '../sample/MiMundoEncantado.PNG'
import icon1 from '../sample/icon1.png'
import covidAnalisis from '../sample/covidAnalisis.PNG'
import analisisVentas from '../sample/analisisVentas.PNG'
import Sentimientos from '../sample/Sentimientos.PNG'
import Emprendedores from '../sample/Emprendedores.PNG'
import miscomienzos from '../sample/miscomienzos.JPG'
import '../css/portfolio.css'
export default class Portfolio extends Component {
    constructor(args) {
        super(args)

        this.state = {

            page: true,
            app: true,
            ad: true,
            ml: true,
            ing: true,
            proyectsWe: [true, true, false

            ]

        }
    }






    render() {
        return (
            <Fragment id="portfolio" >
    <div class="container-fluid" style={{marginTop:" 10%"}} >
	<div class="row">
		<div class="col-md-12">
			<h3 class="text-center">
				Nuestro Portfolio
			</h3>
			<p class="text-center text-muted lead">
				 <strong>Podran Encontrar algunos de nuestros trabajos aqui</strong>. 
			</p>
		</div>
	</div>
	<div class="row">
		<div class="col-md-3" >
			 
                       <ul style={{justifyContent:"space-between", marginTop:"10%"}} >
                            <li><button className="btn bg-dark text-white container" onClick={() => this.setState({ page: !this.state.page, app: false, ad: false, ml: false, ing: false })}>Paginas Web</button></li><br/>
                            <li><button className="btn bg-dark text-white container" onClick={() => this.setState({ app: !this.state.app, page: false, ad: false, ml: false, ing: false })}>Aplicaciones Full Stack</button></li><br/>
                            <li><button className="btn bg-dark text-white container" onClick={() => this.setState({ ad: !this.state.ad, app: false, page: false, ml: false, ing: false })}>Analisis de Datos</button></li><br/>
                            <li><button className="btn bg-dark text-white container" onClick={() => this.setState({ ml: !this.state.ml, app: false, ad: false, page: false, ing: false })}>Machine Learning</button></li><br/>
                            <li><button className="btn bg-dark text-white container" onClick={() => this.setState({ ing: !this.state.ing, app: false, ad: false, ml: false, page: false })}>Ingenieria</button></li><br/>
                        </ul>
		</div>
		
		<div class="col-md-9" >
			<div className="row" style={{border:"solid 1px lightblue", borderRadius:"15px"}} hidden={this.state.page && !this.state.app && !this.state.ad && !this.state.ml && !this.state.ing ? false : true}>
				
			<TarjetaPagina title="GoAdiestramiento" text="Pagina de Comercio de Adiestramiento para perros" imgs={GoAdiestramiento}  a={"https://patriciomirosh.github.io/Webpractica/"}/>
            <TarjetaPagina title="Mi Web practica"  text="Mi pagina de pratica"   imgs={miscomienzos}  a={"https://patriciomirosh.github.io/Webpractica/"}   />
            <TarjetaPagina title="Administrador de Registros Personal" text="Registrador personal" imgs={icon1} a={"https://patriciomirosh.github.io/Webpractica/"}/>
			</div>
            <div className="row" style={{border:"solid 1px lightblue", borderRadius:"15px"}} hidden={this.state.app && !this.state.page && !this.state.ad && !this.state.ml && !this.state.ing ? false : true}>
				
			<TarjetaPagina title="Feria Virtual" text="Proyecto para ayudar a virtualizar a pequeños emprendedores" imgs={Emprendedores}  a={"https://patriciomirosh.github.io/Webpractica/"}/>
            <TarjetaPagina title="Mi mundo Encantando"  text="Proximamente"   imgs={MimundoEncantado}  a={"https://patriciomirosh.github.io/Webpractica/"}   />
            <TarjetaPagina title="Administrador de Registros Personal" text="Registrador personal" imgs={icon1} a={"https://patriciomirosh.github.io/Webpractica/"}/>
			</div>
            <div className="row" style={{border:"solid 1px lightblue", borderRadius:"15px"}} hidden={this.state.ad && !this.state.app && !this.state.page && !this.state.ml && !this.state.ing ? false : true}>
				
			<TarjetaPagina title="Informe del Coronavirus" text="El crecimiento de una pandemia en numeros y que sucedera si no se lo contiene, Analisis Rebrote Europeo" imgs={covidAnalisis} a={"https://patriciomirosh.github.io/Webpractica/"}/>
            <TarjetaPagina title="Analisis anual de ventas Eccomerce"  text="Cuando compramos tenemos patrones que las empresas aprovechan, ¿Entonces cuando comprar?"   imgs={analisisVentas}   a={"https://patriciomirosh.github.io/Webpractica/"}  />
            <TarjetaPagina title="Administrador de Registros Personal" text="¿Que palabras Usamos? Y que dicen de nosotros, analisis de mas de un millon de comentarios en youtube" imgs={Sentimientos} a={"https://patriciomirosh.github.io/Webpractica/"}/>
			</div>
            <div className="row" style={{border:"solid 1px lightblue", borderRadius:"15px"}} hidden={this.state.ml && !this.state.app && !this.state.ad && !this.state.page && !this.state.ing ? false : true}>
				
			<TarjetaPagina title="GoAdiestramiento" text="Pagina de Comercio de Adiestramiento para perros" imgs={GoAdiestramiento} a={"https://patriciomirosh.github.io/Webpractica/"}/>
            <TarjetaPagina title="Mi mundo Encantando"  text="Proximamente"   imgs={MimundoEncantado}    a={"https://patriciomirosh.github.io/Webpractica/"} />
            <TarjetaPagina title="Administrador de Registros Personal" text="Registrador personal" imgs={icon1} a={"https://patriciomirosh.github.io/Webpractica/"}/>
			</div>
            <div className="row" style={{border:"solid 1px lightblue", borderRadius:"15px"}} hidden={this.state.ing && !this.state.app && !this.state.ad && !this.state.ml && !this.state.page ? false : true}>
				
			<TarjetaPagina title="GoAdiestramiento" text="Pagina de Comercio de Adiestramiento para perros" imgs={GoAdiestramiento} a={"https://patriciomirosh.github.io/Webpractica/"} />
            <TarjetaPagina title="Mi mundo Encantando"  text="Proximamente"   imgs={MimundoEncantado}  a={"https://patriciomirosh.github.io/Webpractica/"}   />
            <TarjetaPagina title="Administrador de Registros Personal" text="Registrador personal" imgs={icon1} a={"https://patriciomirosh.github.io/Webpractica/"}/>
			</div>
            </div>
	</div>
</div>

            </Fragment>
        )
    }
}
