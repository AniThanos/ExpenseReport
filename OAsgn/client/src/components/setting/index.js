import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Header from '../header/index'
import SideBar from '../sidebar/index'
import { connect } from 'react-redux'
import { setBudget } from '../../action/budget'
import { setCategory } from '../../action/category'
function SettingsPage(props) {



    const [budgetAmount, setbudgetAmount] = useState(props.budget)
    const [categoriesName, setcategoriesName] = useState('')
    const [arrayData, setarrayData] = useState(props.category)
    const [show, setshow] = useState(false)
    const [deleteItem, setdeleteItem] = useState('')


    const handleShow = (item) => {
        // setshow({ show: true, deleteItem: item })
        setshow(true)
        setdeleteItem(item)
    }
    const handleClose = () => {
        // setshow({ show: false, deleteItem: '' })
        setshow(true)
        setdeleteItem('')
    }

    const handleInput = (e, type) => {


        setcategoriesName(
            e.target.value
        )
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        // console.log('update Budget clicked', budgetAmount) 
        props.setBudget(budgetAmount)
    }

    const handleCotegories = (e) => {
        // console.log('add Cotegories clicked', categoriesName)
        // this.setState({
        //     arrayData: [...arrayData, categoriesName]
        // })
        // console.log(e.target.value === "")


        if (categoriesName !== "") {
            setarrayData(categoriesName)
            props.setCategory(categoriesName)
            // console.log(arrayData)
        }
        setcategoriesName('')
    }

    const deleteClicked = (item) => {
        // this.setState({})

        var tempArr = arrayData.slice();
        console.log(item)
        var index = arrayData.findIndex(data => data === item)

        tempArr.splice(index, 1)
        // console.log(tempArr)

        // this.setState({
        //     arrayData: tempArr,
        //     show: false
        // })
        setarrayData(tempArr)
        setshow(false)

    }
    return (
        <div>
            <Header />
            <div>
                <SideBar />
                <div style={{ marginTop: "20px", marginTop: '100px', marginBottom: "10px", display: "flex", flexDirection: 'column', textAlign: "center" }}>
                    <div className="totalBudget" >
                        <label style={{ margin: '15px', fontWeight: 'bold', fontSize: '25px' }}>Total Budget </label>
                        <input style={{}}
                            type="number" value={budgetAmount}
                            onChange={e => setbudgetAmount(e.target.value)}
                            name="budgetAmount"
                        // disabled = {balanceCheck ? true : false}
                        />
                        <button className="btn btn-success" onClick={(e) => handleUpdate(e)}  >
                            Update
                </button>

                    </div>

                    <div className="categories" style={{ marginTop: '60px' }}>
                        <label style={{ margin: '15px', fontWeight: 'bold', fontSize: '25px' }}>Categories</label>
                        <input style={{}}
                            type="text" value={categoriesName}
                            name="categoriesName"
                            onChange={e => handleInput(e)}
                            // disabled = {balanceCheck ? true : false}
                            placeholder='categories name here'
                            required
                            value={categoriesName}
                        />

                        <button className="btn btn-success" onClick={handleCotegories}  >
                            Add
                </button>

                    </div>
                    <div className="items" style={{ marginTop: '60px', marginLeft: '20%' }}>

                        <table className="table table-striped table-bordered ">
                            <thead className=" header thead-dark ">
                                <tr>
                                    <th className="text-center">Categories </th>
                                    <th className="text-center">Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.category.map((data, i) => {
                                    return <tr key={i} >
                                        <td>{data}</td>
                                        {/* <td> <i class="fa fa-trash" onClick={()=>this.deleteClicked(data)}> </i ></td> */}
                                        <td><button className="btn btn-danger" onClick={() => handleShow(data)}>Delete</button></td>

                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Expense</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><div><label>Are you sure want to delete {deleteItem} category</label></div></Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-success" onClick={handleClose}>
                                Close
                        </button>
                            <button className="btn btn-primary" onClick={() => deleteClicked(deleteItem)}>
                                Delete
                        </button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>

        </div>



    )
}


const mapStateToProps = state => ({
    budget: state.budget,
    category: state.category
})

export default connect(mapStateToProps, { setBudget, setCategory })(SettingsPage);