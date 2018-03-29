import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGetData } from '../../shared/helpers'
import '../Styles/Nav/Nav.css'
import '../Styles/Nav/hamburger-min.css'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

//import { slide as Menu } from 'react-burger-menu'
// import { stack as Menu } from 'react-burger-menu'
import { push as Menu } from 'react-burger-menu'

class MobileNav extends Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div id="push" className="bm-menu-wrap">
        <Menu left>
          <NavLink className="menu-item" activeClassName="active" to="/">
            Home
          </NavLink>

          <NavLink className="menu-item" to="/changetext">
            <i className="now-ui-icons ui-1_bell-53" />
            <span>Change Text</span>
          </NavLink>

          <NavLink className="menu-item" to="/formpost">
            <i className="now-ui-icons design_image" />
            <span>Form Post</span>
          </NavLink>

          <NavLink className="menu-item" to="/getdata">
            <i className="now-ui-icons users_single-02" />
            <span>Get Data</span>
          </NavLink>

          <NavLink className="menu-item" to="/pageOne">
            <i className="now-ui-icons files_paper" />
            <span>PageOne</span>
          </NavLink>
        </Menu>
      </div>
    )
  }
}

export default connect(state => ({
  GetData: state.GetData
}))(MobileNav)
