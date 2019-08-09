import React, { Component } from 'react'
import { Consumer } from './context'
import pathToReg from 'path-to-regexp'

export default class Route extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <Consumer>
        {
          state => {
            // console.log(state)
            // path是route中传递的
            let { path, component:Component, exact=false } = this.props
            // console.log(Component)
            // pathname是location中的
            let pathname = state.location.pathname
            // 根据path实现一个正则 通过这个正则匹配
            let keys = []
            let reg = pathToReg(path, keys, {end: exact})
            keys = keys.map(item => item.name)
            let result = pathname.match(reg)
            let [ , ...values] = result || []
            // console.log(result)
            let props = {
              location: state.location,
              history: state.history,
              match: {
                params: keys.reduce((obj, curr, idx) => {
                  obj[curr] = values[idx]
                  return obj
                }, {})
              }
            }
            if(result) {
              return <Component {...props}></Component>
            }
            return null
          }
        }
      </Consumer>
    )
  }
}
