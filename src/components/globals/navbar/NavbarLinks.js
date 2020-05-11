import React, { Component } from "react"
import { Link } from "gatsby"
import { styles } from "../../../utils"
import styled from "styled-components"
import { transDefault } from "../../../utils/styles"

export default class NavbarLinks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      links: [
        {
          id: 1,
          path: "/",
          name: "home",
        },
        {
          id: 2,
          path: "/about",
          name: "about",
        },
        {
          id: 3,
          path: "/menu",
          name: "menu",
        },
        {
          id: 4,
          path: "/contact",
          name: "contact",
        },
      ],
    }
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "152px" : "0px")};
  overflow: hidden;
  ${styles.transDefault};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`
