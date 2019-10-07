import React from 'react'
import './style.css'
import Chart from 'react-google-charts'
import axios from 'axios'
import { connect } from 'react-redux'

class CategoryChart extends React.Component {
    state = {
        expense: [],
        totalExpense: 0,
        catArr: [],

        chartData: [
            ['category', 'expense per category']
        ]
    }

    componentDidMount() {
        //get xpense data
        axios.get('http://localhost:3010/expense').then(res => {

            this.setState({ expense: res.data })

            this.props.category.map(item => {
                let amount = 0;
                var categoryWiseData = this.state.expense.filter(expenseitem => expenseitem.Category === item)
                categoryWiseData.map(catWise => {
                    amount = amount + parseInt(catWise.Amount)
                })
                let tempChartData = this.state.chartData.slice();

                let innerArr = [item, amount]
                tempChartData.push(innerArr)
                this.setState({ chartData: tempChartData })


            })

        }).catch(err => {
            throw Error(err)
        })


    }

    render() {
        return (

            <div className="Category-chart">
                {this.props.category.length <= 5 ?
                    <Chart
                        width={'100%'}
                        height={'100%'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={this.state.chartData}
                        options={{
                            title: 'Category wise Split',
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    /> :
                    <table className="table table-striped">
                        <thead>
                            <th>Category</th>
                        </thead>
                        <tbody>
                            {this.props.category.map(item => {
                                return (<tr>
                                    <td>{item}</td>
                                </tr>)
                            })}

                        </tbody>
                    </table>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        category: state.category
    }
}
export default connect(mapStateToProps)(CategoryChart)