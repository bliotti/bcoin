import React from 'react'
import { Route, Switch } from 'react-router-dom'
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar'

// core components
import AdminNavbar from '../../components/Navbars/AdminNavbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import FixedPlugin from '../../components/FixedPlugin/FixedPlugin.jsx'

import routes from 'routes.js'

import logo from '../../assets/img/react-logo.jpg'

var ps

class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: 'blue',
      sidebarOpened:
        document.documentElement.className.indexOf('nav-open') !== -1
    }
  }
  componentDidMount() {
    console.log(navigator.platform)
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on'
      document.documentElement.classList.remove('perfect-scrollbar-off')
      ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true })
      let tables = document.querySelectorAll('.table-responsive')
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i])
      }
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy()
      document.documentElement.className += ' perfect-scrollbar-off'
      document.documentElement.classList.remove('perfect-scrollbar-on')
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === 'PUSH') {
      if (navigator.platform.indexOf('Win') > -1) {
        let tables = document.querySelectorAll('.table-responsive')
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i])
        }
      }
      document.documentElement.scrollTop = 0
      document.scrollingElement.scrollTop = 0
      this.refs.mainPanel.scrollTop = 0
    }
  }
  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle('nav-open')
    this.setState({ sidebarOpened: !this.state.sidebarOpened })
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        )
      } else {
        return null
      }
    })
  }
  handleBgClick = color => {
    this.setState({ backgroundColor: color })
  }

  render() {
    // console.log(this.props)

    return (
      <>
        <div className="wrapper">
          <Sidebar
            {...this.props}
            routes={routes}
            bgColor={this.state.backgroundColor}
            logo={{
              outterLink: 'https://www.buildcoinfoundation.org/',
              text: 'Buildcoin',
              imgSrc: logo
            }}
            toggleSidebar={this.toggleSidebar}
          />

          <div
            className="main-panel"
            ref="mainPanel"
            data={this.state.backgroundColor}
          >
            <AdminNavbar
              {...this.props}
              brandText="Brand"
              toggleSidebar={this.toggleSidebar}
              sidebarOpened={this.state.sidebarOpened}
            />
            <Switch>{this.getRoutes(routes)}</Switch>
            {// we don't want the Footer to be rendered on map page
            this.props.location.pathname.indexOf('maps') !== -1 ? null : (
              <Footer fluid />
            )}
          </div>
        </div>
        <FixedPlugin
          bgColor={this.state.backgroundColor}
          handleBgClick={this.handleBgClick}
        />
      </>
    )
  }
}

export default Admin
