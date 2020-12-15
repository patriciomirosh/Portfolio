import React, { Component } from 'react'
import imp from '../sample/imp.jpg'


export default class ContainSearchProfile extends Component {
    render() {
        return (
            <div className="col sm-6">
               <div><img className="imgPrinc" src={imp}  alt="troquelado" /></div>
                <div><p>LOREN ipsum inmortal perhaps</p></div>
            </div>
                
            
        )
    }
}
