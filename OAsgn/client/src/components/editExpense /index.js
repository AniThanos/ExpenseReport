import React,{useState} from 'react'
import './style.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {setExpense} from '../../action/expense'

const EditExpense=(props)=>{
    const [formData,setFormData]=useState({
        category:props.category,
        itemname:props.item,
        amount:props.amount,
        expDate:props.expDate
    })

    const {category,itemname,amount,expDate}=formData;

    const formDataHandler=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const submitForm=async (e)=>{
        e.preventDefault()
        const expenseData={category,itemname,amount,expDate}

        const config={
            headers:{
                'Contect-Type':'application/json'
            }
        }

        const updateReq=await axios.put(`http://localhost:3010/expense/updateTransaction/${props.id}`,expenseData,config)

        console.log(updateReq['data'].transactions)
        if(updateReq['data'].transactions.length>0){
            props.setExpense(updateReq['data'].transactions)
            props.closeModal();
        }

    }
    return(
        <form className="form-horizontal" onSubmit={(e)=>submitForm(e)}>
            <div className="form-group">
                <label className="control-label col-sm-5">Category :</label>
                <div className="col-sm-10">
                    <input type="text" value={formData.category} name="category" className="form-control" disabled/>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label col-sm-5">Item Name :</label>
                <div className="col-sm-10">
                    <input type="text" value={formData.itemname} onChange={(e)=>formDataHandler(e)} name="itemname" className="form-control"/>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label col-sm-5">Amount :</label>
                <div className="col-sm-10">
                    <input type="number" value={formData.amount} name="amount" onChange={(e)=>formDataHandler(e)} className="form-control"/>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label col-sm-5">Expense Date :</label>
                <div className="col-sm-10">
                    <input type="date" value={formData.expDate} name="expDate" onChange={(e)=>formDataHandler(e)} className="form-control" style={{paddingRight:'24px'}}/>
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success" style={{marginLeft:'15px'}}> Submit</button>
            </div>
        </form>
    )
}
export default connect(null,{setExpense})(EditExpense)