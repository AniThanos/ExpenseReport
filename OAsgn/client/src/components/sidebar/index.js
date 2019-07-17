import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'
export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div>
                    <Link to='/' className="active">Home</Link>
                </div>
                <div>
                    <Link to='/settings'>Settings</Link>
                </div>
                <div>
                    <Link to='/profile'>Profile</Link>
                </div>
            </div>
        )
    }
}