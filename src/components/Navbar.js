import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState((state) => {
            return { isOpen: !state.isOpen }
        })
    }
    render() {
        return (
            <nav className="navbar">
            <div className="nav-center"></div>
            </nav>
        )
    }
}

export default Navbar;