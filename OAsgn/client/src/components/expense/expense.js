import React from 'react'
import Header from '../header/index'
import SideBar from '../sidebar/index'
import BudgetChart from '../budgetChart/index'
import CategoryChart from '../categorychart/index'
import ExpenseTable from '../expenseTable/index'
import axios from 'axios';
export default class Expense extends React.Component {
    state = {
        expense: []
    }
    componentDidMount() {
        // request.get('http://localhost:3010/expense', (err, data) => {
        //     console.log(data.body)
        // })
        axios.get('http://localhost:3010/expense').then(res => {
            // console.log(res.data)
            this.setState({ expense: res.data })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <Header />
                <div style={{ display: "flex" }}>
                    <SideBar />
                    <BudgetChart />
                    <CategoryChart />

                </div>
                <ExpenseTable expense={this.state.expense} />
            </div>
        )
    }
}