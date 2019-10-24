import React from 'react';
import { MDBDataTable } from 'mdbreact';
import './style.css'
import Modal from 'react-bootstrap/Modal'
import ExpenseForm from '../addexpensemodal/index'
import Axios from 'axios';
import {setExpense} from './../../action/expense'
import {connect} from 'react-redux'
class DatatablePage extends React.Component {

    state = {
        show: false,
        data: ''
    }

    handleShow = () => {
        this.setState({ show: true })
    }
    handleClose = () => {
        this.setState({ show: false })
    }

    handleEdit = (index) => {
        console.log("Edit handler", index)
    }



    hanleDeleteItem = (index) => {
        // console.log("Delete Handler")
        // console.log("Before Delete::::::::::", this.props.expense)
        // // axios.delete(`http://localhost:3010/expense/deleteTransactions/${index}`)
        // const itemData = this.state.data;
        // itemData.splice(index, 1);
        // this.setState({ data: itemData })
        // console.log("After Delete::::::::", this.props.expense)

       Axios.delete(`http://localhost:3010/expense/deleteTransactions/${index}`)
        .then(res=>{
            // this.setState({data:res.data})

            this.props.setExpense(res['data'])
            // window.location.reload()
        }).catch(res=>{
            console.log("Error Occured")
        })
    }

    componentDidMount(){
        setTimeout(()=>{
            // console.log(this.props.expense)
        },1000)
    }

    render() {
        
        const button = (index) => {
            return (<div>
                <button onClick={() => this.handleEdit(index)} className="btn btn-outline-primary">Edit</button>
                <button onClick={() => this.hanleDeleteItem(index)} className="btn btn-outline-danger">Delete</button>
            </div>)
        }
        const rowData = this.props.expense;
        rowData.map((row, index) => {
            row.action = button(index)
        })

        const data = {
            columns: [
                {
                    label: 'Category',
                    field: 'Category',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Item Name',
                    field: 'Item',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Amount',
                    field: 'Amount',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Expense date',
                    field: 'Date',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Action'
                }

            ],

            rows: rowData



        };

        return (
            
            < div className="Expense-Table" >

                <button className="btn btn-info" onClick={this.handleShow}>AddExpense</button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Expense</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><ExpenseForm modalClose={this.handleClose} /></Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-success" onClick={this.handleClose}>
                            Close
                        </button>
                        {/* <button className="btn btn-primary" onClick={this.handleClose}>
                            Save Changes
                        </button> */}
                    </Modal.Footer>
                </Modal>

                <MDBDataTable
                    striped
                    bordered
                    small
                    data={data}
                    editable
                />
            </div >
        );
    }
}

function mapStateToProps (state){
    return ({
        expense:state.expense
    })
}
export default connect(mapStateToProps,{setExpense})(DatatablePage);