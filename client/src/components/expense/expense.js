import React from 'react'
import Header from '../header/index'
import SideBar from '../sidebar/index'
import BudgetChart from '../budgetChart/index'
import CategoryChart from '../categorychart/index'
import ExpenseTable from '../expenseTable/index'
import axios from 'axios';
import { setExpense } from './../../action/expense'
import { setTotalExpense } from '../../action/totalExpense'
import { connect } from 'react-redux'
import {serviceURL} from '../config/url'
class Expense extends React.Component {
    state = {
        expense: [],
        totalExpense: 0
    }
    componentDidMount() {
        // request.get('http://localhost:3010/expense', (err, data) => {
        //     console.log(data.body)
        // })
        let amt = 0;
        axios.get(`${serviceURL}expense`).then(res => {
            res.data.map(item => {
                amt += parseInt(item.Amount)
            })
            this.setState({ expense: res.data, totalExpense: amt })
            this.props.setExpense(res.data)
            this.props.setTotalExpense(this.state.totalExpense)
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <Header />
                <div style={{display:'contents',flexFlow:'row wrap'}}>
                    <SideBar />
                    <BudgetChart />
                    <CategoryChart />
                    <ExpenseTable expense={this.state.expense} />
                </div>

            </div>
        )
    }
}
export default connect(null, { setExpense, setTotalExpense })(Expense)