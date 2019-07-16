import React from 'react'
import Header from '../header/index'
import SideBar from '../sidebar/index'
export default class Expense extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div style={{ display: "flex" }}>
                    <SideBar />
                    <div>
                        Hello
                    </div>
                </div>

            </div>
        )
    }
}