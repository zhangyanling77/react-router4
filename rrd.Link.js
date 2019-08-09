import React, { Component } from 'react'
import { Consumer } from './context'

export default class Link extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <Consumer>
      {
        state => {
          return (
            <a onClick={() => {
              // console.log("to", this.props.to)
              state.history.push(this.props.to)
            }}>
            {this.props.children}
            </a>
          )
        }
      }
      </Consumer>
    )
  }
}
