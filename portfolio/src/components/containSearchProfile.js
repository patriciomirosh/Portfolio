import React, { Component } from 'react'
import imp from '../sample/imp.jpg'


export default class ContainSearchProfile extends Component {
    render() {
        return (
            <div className="col sm-6 ">
               <div><img className="imgPrinc row col sm-6" src={imp}  alt="troquelado" /></div>
                <div className="row col sm-6"><p style={{fontSize:"0.4em"}}>Somos una pareja joven, que a raíz del panorama actual en el cual  nos encontramos de aislamiento social preventivo y obligatorio nos llevo a una situación critica economica, de allí surgió a modo de emprendurismo el comenzar a capacitarnos en el desarrollo de paginas web, precisamente en el desarrollo Full Stack haciendo uso de multiples lenguajes como HTML, CSS, JavaScript, Python y PHP.</p></div>
            </div>
                
            
        )
    }
}
