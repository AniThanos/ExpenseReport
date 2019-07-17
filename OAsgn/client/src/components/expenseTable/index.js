import React from 'react';
import { MDBDataTable } from 'mdbreact';
import './style.css'
class DatatablePage extends React.Component {

    render() {
        // console.lo/g(this.props.expense)
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
                }
            ],

            rows: this.props.expense



        };

        return (

            < div className="Expense-Table" >

                {/* {console.log("asd", this.props.expense)} */}
                <MDBDataTable
                    striped
                    bordered
                    small
                    data={data}
                />
            </div >
        );
    }
}
export default DatatablePage;