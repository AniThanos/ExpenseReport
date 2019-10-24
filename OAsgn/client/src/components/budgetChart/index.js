import React, { Component } from 'react'

import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './style.css'
import { connect } from 'react-redux'
class Chart extends Component {
    state={
        totalExpense:'',
        budget:''
    }
    
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                totalExpense:this.props.totalExpense,
                budget:this.props.budget
            })
        },1000)
    }

    componentWillReceiveProps(){
        console.log(1);
        
    }
    
    render() {
        const percentage = (this.props.totalExpense / this.props.budget) * 100;
        const num = percentage.toFixed(2)


        return (
            <div className="budget-chart">

                {/* <div style={{ width: '50%' }}></div> */}
                <div style={{ display:'flex' }}><CircularProgressbar value={num}
                    text={`${num}%`}
                    strokeWidth={5}

                />

                </div>
                <div style={{ }}>
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
        budget: state.budget,
        totalExpense:state.totalExpense
    }
}

export default connect(mapStateToProps)(Chart); 