import React, { Component } from 'react'
import '../css/search.css';

export default class SearchLinks extends Component {
    render() {
        return (
            <div className="col">
                <a href={this.props.a}><h3   id="wordTitle">{this.props.h2}</h3></a>
                <p style={{color:"black"}}>{this.props.p} </p>
                
                
            </div>
        )
    }
}
