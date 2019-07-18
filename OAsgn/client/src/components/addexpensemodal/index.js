import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const ExpenseForm = () => {
    const [form, setForm] = useState({
        category: '',
        item: '',
        amount: '',
        date: ''
    })


    const { category, item, amount, date } = form;

    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        const newExpense = { category, item, amount, date }
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body = newExpense
            const res = await axios.post('http://localhost:3010/expense/addTransactions', body, config)
            if (res['data'] === "Success") {
                window.location.reload()

            }
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div>
            <Form onSubmit={(e) => formSubmit(e)}>
                <Form.Group controlId="" >
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" name="category" onChange={e => changeHandler(e)} placeholder="Enter category" />
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control type="text" name="item" placeholder="Item Name" onChange={e => changeHandler(e)} />
                </Form.Group>
                <Form.Group controlId="">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" name="amount" placeholder="Amount" onChange={e => changeHandler(e)} />
                </Form.Group>
                <Form.Group controlId="">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name="date" placeholder="date" onChange={e => changeHandler(e)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )

}
export default ExpenseForm;