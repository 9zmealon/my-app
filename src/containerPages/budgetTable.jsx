import React, { Component } from 'react';

class BudgetTable extends Component {
    tableData() {
        var data = this.props.list;
        if (data) {
            return (data.map((data, index) => {
                return (<tr key={index}>
                    <td>{data.title}</td>
                    <td>{data.price}</td>
                </tr>)
            }))
        }
        return;
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className="roundXXLargeBorder">Income-Source</th>
                            <th className="roundXXLargeBorder">Income-Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tableData()}
                        {/* {this.props.list.map((data, index) => {
                            return (<tr key={index}>
                                <td>{data.title}</td>
                                <td>{data.price}</td>
                            </tr>)
                        })} */}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BudgetTable;