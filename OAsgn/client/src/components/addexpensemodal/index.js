import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class ExpenseForm extends React.Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Enter category" />
                    </Form.Group>

                    <Form.Group controlId="">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control type="text" placeholder="Item Name" />
                    </Form.Group>
                    <Form.Group controlId="">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" placeholder="Amount" />
                    </Form.Group>
                    <Form.Group controlId="">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="date" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </div>
        )
    }
}