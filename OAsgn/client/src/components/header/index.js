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
                    <nav className="navbar navbar-inverse">
                        <div>
                            <Link to='/'>Home</Link>
                        </div>
                        <div>
                            <Link to='/setting'>Settings</Link>
                        </div>
                        <div>
                            <Link to='/'>Profile</Link>
                        </div>
                    </nav>
                </div>

                <h3>Expense Report</h3>
            </div>
        )
    }
}