import React from 'react'
import Header from '../header/index'
import SideBar from '../sidebar/index'
import BudgetChart from '../budgetChart/index'
import CategoryChart from '../categorychart/index'
import ExpenseTable from '../expenseTable/index'
import axios from 'axios';
export default class Expense extends React.Component {
    state = {
        expense: [],
        totalExpense: 0
    }
    componentDidMount() {
        // request.get('http://localhost:3010/expense', (err, data) => {
        //     console.log(data.body)
        // })
        let amt = 0;
        axios.get('http://localhost:3010/expense').then(res => {
            res.data.map(item => {
                amt += parseInt(item.Amount)
            })
            this.setState({ expense: res.data, totalExpense: amt })
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
                    <BudgetChart totalExpense={this.state.totalExpense} />
                    <CategoryChart />

                </div>
                <ExpenseTable expense={this.state.expense} />
            </div>
        )
    }
}