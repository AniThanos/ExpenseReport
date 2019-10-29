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
                    <div>
                        <Link to='/' className="active">Home</Link>
                    </div>
                    <div>
                        <Link to='/setting'>Settings</Link>
                    </div>
                    <div>
                        <Link to='/'>Profile</Link>
                    </div>            
            </div>
        )
    }
}