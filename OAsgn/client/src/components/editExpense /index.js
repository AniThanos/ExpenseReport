import React,{useState} from 'react'
import './style.css'
export default function editExpense(props){
    return(
        <form className="form-horizontal">
            <div className="form-group">
                <label className="control-label col-sm-5">Item Name :</label>
                <div className="col-sm-10">
                    <input type="text" value={props.item} id="itemname" className="form-control"/>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label col-sm-5">Amount :</label>
                <div className="col-sm-10">
                    <input type="number" value={props.amount} id="amount" className="form-control"/>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label col-sm-5">Expense Date :</label>
                <div className="col-sm-10">
                    <input type="date" value={props.expDate} id="expdate"  className="form-control" style={{paddingRight:'24px'}}/>
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success" style={{marginLeft:'15px'}}> Submit</button>
            </div>
        </form>
    )
}