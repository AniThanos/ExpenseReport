import React, { Component } from 'react'

import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './style.css'
import { connect } from 'react-redux'
class Chart extends Component {


    render() {
        const percentage = (this.props.totalExpense / this.props.budget) * 100;
        const num = percentage.toFixed(2)


        return (
            <div className="budget-chart">

                {/* <div style={{ width: '50%' }}></div> */}
                <div style={{ width: '50%', marginTop: '5%' }}><CircularProgressbar value={num}
                    text={`${num}%`}
                    strokeWidth={5}

                />

                </div>
                <div style={{ width: '50%', marginTop: '15%', padding: '10%' }}>
                    <h6>Total Budget</h6>
                    <p>{this.props.budget}</p>
                    <h6>Total Expense</h6>
                    <p>{this.props.totalExpense}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        budget: state.budget

    }
}

export default connect(mapStateToProps)(Chart); 