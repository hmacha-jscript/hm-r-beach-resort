import React, { Component } from 'react';


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