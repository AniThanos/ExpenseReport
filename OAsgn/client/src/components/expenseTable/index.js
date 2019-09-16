import React from 'react';
import { MDBDataTable } from 'mdbreact';
import './style.css'
import Modal from 'react-bootstrap/Modal'
import ExpenseForm from '../addexpensemodal/index'
class DatatablePage extends React.Component {

    state = {
        show: false
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
        console.log("Delete Handler")
        console.log("Before Delete::::::::::",this.props.expense)
        const itemData=this.props.expense;
        this.props.expense.splice(index,1)

        console.log("After Delete::::::::",this.props.expense)


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
        console.log(rowData)
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
                    <Modal.Body><ExpenseForm /></Modal.Body>
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
export default DatatablePage;