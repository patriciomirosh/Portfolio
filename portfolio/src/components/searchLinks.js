import React, { Component } from 'react'

export default class SearchLinks extends Component {
    render() {
        return (
            <div className="col">
                <a href={this.props.a}><h2>{this.props.h2}</h2></a>
                <p style={{color:"black"}}>{this.props.p} </p>
                
                
            </div>
        )
    }
}
