/*eslint-disable*/
import React from 'react'
// used for making the prop types of this component
import PropTypes from 'prop-types'
//! DONe
// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from 'reactstrap'

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink
                href="https://buildcoinfoundation.ideascale.com"
                // tag="https://buildcoinfoundation.ideascale.com"
                to="https://buildcoinfoundation.ideascale.com"
              >
                Idea Share
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.buildcoinfoundation.org/">
                About Build Coin
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://medium.com/@buildcoin">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://t.me/buildcoinfound">Telegram</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </footer>
    )
  }
}

export default Footer
