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

    getData() {
        setTimeout(() => {
            this.state.chartData= [
                ['category', 'expense per category']
            ]
            this.props.category.map(item => {
                let amount = 0;
                var categoryWiseData = this.props.expense.filter(expenseitem => expenseitem.Category === item)
                categoryWiseData.map(catWise => {
                    amount = amount + parseInt(catWise.Amount)
                })
                let tempChartData=[];
                tempChartData = this.state.chartData.slice();
                
                let innerArr = [];
                innerArr=[item, amount]
                tempChartData.push(innerArr)
                this.setState({ chartData: tempChartData })
            })

        }, 1000)
    }
    
    componentWillReceiveProps(){
        this.getData()
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
        category: state.category,
        expense: state.expense
    }
}
export default connect(mapStateToProps)(CategoryChart)