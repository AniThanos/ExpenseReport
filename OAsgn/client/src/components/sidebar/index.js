import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'
export default class Sidebar extends React.Component {
    state = {
        display: false
    }
    activeMenu = () => {

        this.setState({ display: !this.state.display })
    }
    render() {
        return (

            <div className="sidebar">              
                        <Link to='/' className="active">Home</Link>
                        <Link to='/setting'>Settings</Link>
                        <Link to='/'>Profile</Link>  
            </div>
        )
    }
}