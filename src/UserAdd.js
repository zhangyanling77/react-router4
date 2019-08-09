import React, { Component } from 'react'


export default class UserAdd extends Component {
  constructor() {
    super()
    this.text = React.createRef()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let value = this.text.current.value
    console.log(value, this.props)
    this.props.history.push('/user/list')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' ref={this.text}/>
        <button type='submit'>submit</button>
      </form>
    )
  }
}
