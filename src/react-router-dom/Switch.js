import React, { Component } from 'react'
import { Consumer } from './context'
import pathToReg from 'path-to-regexp'

export default class Switch extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <Consumer>
      {
        state => {
          let pathname = state.location.pathname
          let children = this.props.children
          for(let i = 0; i < children.length; i++){
            let child = children[i]
            // Redirect没有path属性
            let path = child.props.path || ''
            let reg = pathToReg(path, [], {end: false})
            if(reg.test(pathname)) {
              return child
            }
          }

          return null
        }
      }
      </Consumer>
    )
  }
}
