import React,{useState} from 'react'
import './style.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {setExpense} from '../../action/expense'
import {serviceURL} from '../config/url'
import {setTotalExpense} from '../../action/totalExpense'

const EditExpense=(props)=>{
    const [formData,setFormData]=useState({
        category:props.category,
        itemname:props.item,
        amount:props.amount,
        expDate:props.expDate
    })
    const [errorMessage,setErrorMessage]=useState('')
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
        const remBal=props.budget-props.totalExpense       
        if(amount<=remBal){
            const updateReq=await axios.put(`${serviceURL}expense/updateTransaction/${props.id}`,expenseData,config)
            let expprice=0;
            if(updateReq['data'].transactions.length>0){
                props.setExpense(updateReq['data'].transactions)
                updateReq['data'].transactions.map(elem=>{
                    expprice=expprice+parseInt(elem['Amount'])
                })
                props.setTotalExpense(expprice)
                props.closeModal();
            }
        }
        else{
            console.log(remBal)
            setErrorMessage('Check Amount')
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
            <div className="form-group amount_fieldEdit">
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
            <div style={{marginLeft:'15px',color:'#ff0000'}}>
                <p>{errorMessage}</p>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success" style={{marginLeft:'15px'}}> Submit</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) =>{
    return {
        totalExpense:state.totalExpense,
        budget:state.budget
    }
}


export default connect(mapStateToProps,{setExpense,setTotalExpense})(EditExpense)