import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { connect } from 'react-redux'


const ExpenseForm = (props) => {
    const [form, setForm] = useState({
        category: '',
        item: '',
        amount: '',
        date: ''
    })
    const [error, setError] = useState(false)

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
        if (category === "") {
            setError(true)
        }
        else {
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

    }

    return (
        <div>
            {console.log(props.categoryredux)}
            <Form onSubmit={(e) => formSubmit(e)}>
                <Form.Group controlId="" >
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" onChange={e => changeHandler(e)} name="category" required>
                        <option value="--select--">--select--</option>
                        {props.categoryredux.map(item => {
                            return <option value={item}>{item}</option>
                        })}
                    </Form.Control>
                    {/* <Form.Control type="text" name="category" onChange={e => changeHandler(e)} placeholder="Enter category" /> */}
                </Form.Group>
                {error && <p style={{ color: 'red' }}>Select Category</p>}
                <Form.Group controlId="">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control type="text" name="item" placeholder="Item Name" onChange={e => changeHandler(e)} required />
                </Form.Group>
                <Form.Group controlId="">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" name="amount" placeholder="Amount" onChange={e => changeHandler(e)} required />
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

const mapStateToProps = (state) => ({

    categoryredux: state.category,
    budgetredux: state.budget
})

export default connect(mapStateToProps)(ExpenseForm)