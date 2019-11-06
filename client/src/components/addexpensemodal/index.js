import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { connect } from 'react-redux'
import {setExpense} from './../../action/expense'
import {setTotalExpense} from '../../action/totalExpense'
import {serviceURL} from '../config/url'

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
        else if(amount>props.budgetredux){
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
                const res = await axios.post(`${serviceURL}expense/addTransactions`, body, config)
                if (res['data']) {
                    props.setExpense(res['data'])
                    let newTotalAmt=0;
                    res['data'].map(trans=>{
                        newTotalAmt=newTotalAmt+parseInt(trans.Amount)
                    })
                    props.setTotalExpense(newTotalAmt)
                    props.modalClose()
                }
            } catch (err) {
                console.log(err)
            }
        }

    }

    return (
        <div>
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
                {error && <p style={{ color: 'red' }}>Check Data</p>}
            </Form>
        </div>
    )

}

const mapStateToProps = (state) => ({

    categoryredux: state.category,
    budgetredux: state.budget
})

export default connect(mapStateToProps,{setExpense,setTotalExpense})(ExpenseForm)