import React, { Component } from 'react'
import { render } from 'react-dom'
// import { HashRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import { HashRouter as Router, Route, Link, Redirect, Switch } from './react-router-dom/index'

import Home from './Home'
import Profile from './Profile'
import User from './User'
import 'bootstrap/dist/css/bootstrap.css'


export default class App extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <Router>
        <div>
          <div className='navbar navbar-inverse'>
            <div className='container-fluid'>
              <div className='navbar-heading'>
                <div className='navbar-brand'>一江西流</div>
              </div>
              <div className='nav navbar-nav'>
                <li><Link to='/home'>首页</Link></li>
                <li><Link to='/profile'>个人中心</Link></li>
                <li><Link to='/user'>用户</Link></li>
              </div>
            </div>
          </div>
          <div className='container'>
            <Switch>
              <Route exact={true} path='/home' component={Home}></Route>
              <Route path='/profile' component={Profile}></Route>
              <Route path='/user' component={User}></Route>
              <Redirect to='/home'></Redirect>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

render(<App></App>, window.root)
