import React, { Component } from 'react'

export default class SearchLinks extends Component {
    render() {
        return (
            <div>
                <a href={this.props.a}><h2>{this.props.h2}</h2>
                <p>{this.props.p} </p>
                </a>
                
            </div>
        )
    }
}
