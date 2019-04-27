import React, { Component } from 'react';

class BudgetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Unknown",
            price: 0
        }
    }
    // -----------------------------------------------
    addTitle(event) {
        this.setState({
            title: event.target.value
        })
    }
    addPrice(event) {
        this.setState({
            price: event.target.value
        })
    }
    // --------------------------------------------------
    // =====================================================
    clearState() {
        this.setState({
            title: 'Unknown',
            price: 0
        })
    }
    SubmitBudgetForm() {
        this.props.submittedForm(this.state);
        // this.clearState();
    }
    // ========================================================
    render() {
        return (
            <div>
                <p>Title : <input type="text" onChange={this.addTitle.bind(this)} />
                    Price : <input type="text" onChange={this.addPrice.bind(this)} />
                    <button onClick={this.SubmitBudgetForm.bind(this)}>add</button></p>
            </div>
        )
    }
}
export default BudgetForm;