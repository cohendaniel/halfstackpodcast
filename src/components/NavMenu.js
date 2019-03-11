import React from 'react'
import { Link } from 'gatsby'

const NavMenu = ({className}) => (
    <div className={className}>
        <Link className="navbar-item" to="/about">
        About
        </Link>
        <Link className="navbar-item" to="/products">
        Products
        </Link>
        <Link className="navbar-item" to="/podcasts">
        Podcasts
        </Link>
        <Link className="navbar-item" to="/projects">
        Projects
        </Link>
        <Link className="navbar-item" to="/contact">
        Contact
        </Link>
        <Link className="navbar-item" to="/contact/examples">
        Form Examples
        </Link>
    </div>
)

export default NavMenu