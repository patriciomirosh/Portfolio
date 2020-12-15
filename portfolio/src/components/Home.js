import React, { Component } from 'react'
import Contactofotos from "../sample/Contactofotos.PNG"
import TypedReactDemo from './main'
import '../css/home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <img src={Contactofotos} alt="Nosotros" />
                <TypedReactDemo
	  strings={[
		  'Desarrolladores  <i>Web FullStack</i> ',
		'Some <strong>strings</strong> are bold',
		'HTML characters &times; &copy;'
	  ]}
	/>


            </div>
        )
    }
}
