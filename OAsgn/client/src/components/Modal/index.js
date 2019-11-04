import React from 'react'
import Modal from 'react-bootstrap/Modal'
import EditExpense from '../editExpense /index'
export default class Modall extends React.Component{
    
    render(){
        return(
            <Modal show={this.props.show}>
                <Modal.Header>
                   <Modal.Title>
                     {this.props.title}
                    </Modal.Title> 
                </Modal.Header>
                <Modal.Body>
                    <EditExpense item={this.props.selected.Item} amount={this.props.selected.Amount} expDate={this.props.selected.Date}/>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-danger" onClick={this.props.handleModalClose}>Close</button>
                </Modal.Footer>
            </Modal>
        )
    }
}