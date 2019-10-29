import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
export default class Header extends React.Component {
    state = {
        displayMenu: false
    }
    toggleMenu = () => {
        this.setState({ displayMenu: !this.state.displayMenu })
    }
    render() {
        return (
            <div className="header">

                <button style={{ float: 'left', marginTop: '10px' }} onClick={this.toggleMenu} className="toggleButton">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

                <div className="headerMenu" style={{ display: !this.state.displayMenu ? 'none' : '' }}>
                    <div className="dropDown">

                        <Link to='/'>Home</Link>

                        <Link to='/setting'>Settings</Link>

                        <Link to='/'>Profile</Link>

                    </div>
                </div>

                <h3>Expense Report</h3>
            </div>
        )
    }
}