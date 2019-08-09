import React, { Component } from 'react'
import { Route, Link } from './react-router-dom/index'
import UserAdd from './UserAdd';
import UserList from './UserList';
import UserDetail from './UserDetail';

export default class User extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div>
        <h1>User</h1>
        <div className='col-md-2'>
          <div className='nav nav-stacked'>
            <li><Link to='/user/add'>user add</Link></li>
            <li><Link to='/user/list'>user list</Link></li>
          </div>
        </div>
        <div className='col-md-10'>
          <Route path='/user/add' component={UserAdd}></Route>
          <Route path='/user/list' component={UserList}></Route>
          <Route path='/user/detail/:id' component={UserDetail}></Route>
        </div>
      </div>
    )
  }
}
