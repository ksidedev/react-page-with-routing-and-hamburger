import React, { Component } from 'react'
import ChangeText from './pages/ChangeText'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import FormPost from './pages/FormPost'
import GetData from './pages/GetData'
import PageOne from './pages/PageOne'
import MobileNav from './components/MobileNav/MobileNav'
import './components/Styles/ChangeText/ChangeText.css'
import './components/Styles/Nav/Nav.css'

const Home = () => <h1>Home</h1>

const NavBar = () => (
  <ul className="navigation col-xs-2">
    <div className="navOptionWrapper">
      <li>
        <NavLink activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/changetext">
          <i className="now-ui-icons ui-1_bell-53" />
          <span>Change Text</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/formpost">
          <i className="now-ui-icons design_image" />
          <span>Form Post</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/getdata">
          <i className="now-ui-icons users_single-02" />
          <span>Get Data</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/pageOne">
          <i className="now-ui-icons files_paper" />
          <span>PageOne</span>
        </NavLink>
      </li>
      {/*<li>
        <NavLink
          to={{
            pathname: '/logs',
            search: '?filter=active', 
            state: { fromNavBar: true }
          }}
        >
        Logs
        </NavLink>
      </li>
      <li>
        <NavLink replace={true} to="/children">Children</NavLink>
      </li> */}
    </div>
  </ul>
)

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <MobileNav />
            <div className="bodyWrapper col-xs-10 no-padding greyBg">
              <Route exact path="/" component={Home} />
              <Route strict path="/changetext" render={() => <ChangeText />} />
              <Route strict path="/formpost" render={() => <FormPost />} />
              <Route strict path="/getdata" render={() => <GetData />} />
              <Route strict path="/pageone" render={() => <PageOne />} />
              {/* <Route path="/logs" render={() => <h1>Logs</h1>} />
            <Route
              path="/children"
              children={({ match }) => {
                if (match) {
                  return <h1><GetData /></h1>;
                }
                return null;
              }}
            /> */}
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
