import React, { Component } from 'react'

export default class Li extends Component {
    render() {
        return (
            
                 <li className={this.props.className}>
                      <img src={this.props.img} alt="icon search" id="iconbutton"/>  {this.props.text}
                      
                    </li>
            
        )
    }
}
