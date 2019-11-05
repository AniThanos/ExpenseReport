import React from 'react';
import { MDBDataTable } from 'mdbreact';
import './style.css'
import Modal from 'react-bootstrap/Modal'
import ExpenseForm from '../addexpensemodal/index'
import Axios from 'axios';
import { setExpense } from './../../action/expense'
import { connect } from 'react-redux'
import { setTotalExpense } from '../../action/totalExpense'
import Modall from '../Modal/index'
class DatatablePage extends React.Component {

    state = {
        show: false,
        data: this.props.expense,
        edit: false,
        selExpense:'',
        selectedId:''
    }

    handleShow = () => {
        this.setState({ show: true })
    }
    handleClose = () => {
        this.setState({ show: false })
        this.setState({edit:false})
    }

    handleEdit = (index) => {
        this.setState({ edit: true,
        selExpense:this.props.expense[index] ,
        selectedId:index})
    }


    hanleDeleteItem = (index) => {

        Axios.delete(`http://localhost:3010/expense/deleteTransactions/${index}`)
            .then(res => {
                // this.setState({data:res.data})

                this.props.setExpense(res['data'])
                let newTotalAmt = 0;
                res['data'].map(trans => {
                    newTotalAmt = newTotalAmt + parseInt(trans.Amount)
                })
                this.props.setTotalExpense(newTotalAmt)
            }).catch(res => {
                console.log("Error Occured")
            })
    }

    render() {
        const button = (index) => {
            return (
                <div style={{textAlign:'center'}}>
                    <button onClick={() => this.handleEdit(index)} className="btn btn-outline-primary" style={{ marginRight: '5px' }}>Edit</button>
                    <button onClick={() => this.hanleDeleteItem(index)} className="btn btn-outline-danger">Delete</button>
                </div>
            )
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

                <button className="btn btn-info" style={{ marginLeft: '15px' }} onClick={this.handleShow}>AddExpense</button>
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
                />
                
                    <Modall 
                    show={this.state.edit} 
                    selected={this.state.selExpense}
                    title="edit"
                    handleModalClose={this.handleClose}
                    selectedId={this.state.selectedId}
                    />
    
            </div >
        );
    }
}

function mapStateToProps(state) {
    return ({
        expense: state.expense
    })
}
export default connect(mapStateToProps, { setExpense, setTotalExpense })(DatatablePage);