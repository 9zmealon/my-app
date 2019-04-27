import React, { Component } from 'react';
import BudgetTable from './budgetTable';
import BudgetForm from './budgetForm';
import axios from 'axios';
import '../App.css';

class BudgetCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // title: 'unknown',
            // price: 0,
            incomeList: [],
            expenditureList: [],
            switch: "saving"
        }
    }
    //-------Manual Add Of Data-------------------------------------------------------------------------------------------
    // addTitle(event) {
    //     this.setState({
    //         title: event.target.value
    //     })
    // }
    // addPrice(event) {
    //     this.setState({
    //         price: event.target.value
    //     })
    //     console.log("incomeprice", this.state.incomePrice)
    // }
    // addToList() {
    //     if (this.state.switch === "saving") {
    //         this.setState(state => ({
    //             incomeList: [...state.incomeList, { title: state.title, price: state.price }]
    //         }), () => localStorage.setItem("income", JSON.stringify(this.state.incomeList)))
    //     }
    //     else {
    //         this.setState(state => ({
    //             expenditureList: [...state.expenditureList, { title: state.title, price: state.price }]
    //         }), () => localStorage.setItem("expenditure", JSON.stringify(this.state.expenditureList)))
    //     }
    //     console.log('Current value is : ', this.state.incomeList)
    // }
    //----------------------------------------------------------------------------------------------------------------------
    //========================================================================================================================
    changeSwitchValue() {
        console.log(this.state.switch)
        this.setState(state => ({
            switch: state.switch === 'saving' ? "expenditur" : "saving"
        }), () => console.log(this.state.switch));

    }
    // ==========================================================================================================
    // ----------------------------------------------------------------------------------------------------------------------
    componentDidMount() {
        // var localData = JSON.parse(localStorage.getItem('income'));
        // this.setState({
        //     incomeList: localData
        // })
        //----------------------------------
        
        axios.get('http://192.168.0.110:3000/budget/income')
        .then((response) =>{
            if(response.status === 200){
                this.setState({
                    incomeList: response.data.result
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        })
        //----------------------------------------------------
        // localData = JSON.parse(localStorage.getItem('expenditure'));
        // this.setState({
        //     expenditureList: localData
        // })
        axios.get('http://192.168.0.110:3000/budget/expenses')
        .then((response) =>{
            if(response.status === 200){
                this.setState({
                    expenditureList: response.data.result
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    // ----------------------------------------------------------------------------------------------------------
    submittedFormHandler(dataFromChildren) {

        if (this.state.switch === "saving") {

            //=================================================
            axios.post('http://localhost:3000/budget/income', {
                title: dataFromChildren.title,
                price: dataFromChildren.price
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
              this.setState(state=>({
                incomeList: [...state.incomeList, dataFromChildren]
              }))
              //===============================================
            // var data;//-------localStorage
            // data = this.state.incomeList || [];
            // data.push(dataFromChildren);
            // this.setState({
            //     // incomeList: [...state.incomeList, dataFromChildren]
            //     incomeList: data
            // }, () => localStorage.setItem("income", JSON.stringify(this.state.incomeList)))
        }
        else {
            axios.post('http://localhost:3000/budget/expanses', {
                title: dataFromChildren.title,
                price: dataFromChildren.price
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
              this.setState(state=>({
                expenditureList: [...state.expenditureList, dataFromChildren]
              }))
            // data = this.state.expenditureList || [];//-------localStorage
            // data.push(dataFromChildren);
            // this.setState({
            //     // expenditureList: [...state.expenditureList, dataFromChildren]
            //     expenditureList: data
            // }, () => localStorage.setItem("expenditure", JSON.stringify(this.state.expenditureList)))
        }
       
    }
    // ======================================================================================================================
    render() {
        // --------------------------------------------------------------------------------------------------------------------
        let savings = 0;
        let expenditures = 0;
        if (this.state.incomeList) {
            for (var i = 0; i < this.state.incomeList.length; i++) {
                savings += Number(this.state.incomeList[i].price)
            }
        }
        if (this.state.expenditureList) {
            for (var j = 0; j < this.state.expenditureList.length; j++) {
                expenditures += Number(this.state.expenditureList[j].price)
            }
        }
        // --------------------------------------------------------------------------------------
        return (
            <div>
                {/* ========Manual Form======================================================================================
                <div>
                    <p>Switch to : <button onClick={this.changeSwitchValue.bind(this)}>{this.state.switch}</button></p>
                </div>
                <div>
                    <p>Title : <input type="text" onChange={this.addTitle.bind(this)} />
                        Price : <input type="text" onChange={this.addPrice.bind(this)} />
                        <button onClick={this.addToList.bind(this)}>add</button></p>
                </div>
                ============Manual Tabel=================================================================
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th className="roundXXLargeBorder">Income-Source</th>
                                <th className="roundXXLargeBorder">Income-Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.incomeList.map((data, index) => {
                                return (<tr key={index}>
                                    <td>{data.title}</td>
                                    <td>{data.price}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th className="roundXXLargeBorder">Expenditure-Source</th>
                                <th className="roundXXLargeBorder">Expenditure-Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.expenditureList.map((data, index) => {
                                return (<tr key={index}>
                                    <td>{data.title}</td>
                                    <td>{data.price}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
                <hr/>
                =================================================================================================================== */}
                <div>
                    <p>Switch to : <button onClick={this.changeSwitchValue.bind(this)}>{this.state.switch}</button></p>
                </div>
                <div>
                    <BudgetForm submittedForm={dataFromChildren =>
                        this.submittedFormHandler(dataFromChildren)} />
                </div>
                <hr />
                <div className="budgetTable">
                    <div style={{ float: "left" }}>
                        <h2>Income Table</h2><br />
                        <hr />
                        <BudgetTable list={this.state.incomeList} />
                    </div>

                    <div style={{ float: "right" }}>
                        <h2>Expenditure Table</h2><br />
                        <hr />
                        <BudgetTable list={this.state.expenditureList} />
                    </div>
                </div>
                <div style={{ clear: 'both   ' }}>
                    <hr />
                    <p>
                        Total saving : {savings}
                        <br />
                        Total expenditure : {expenditures}
                    </p>
                </div>
            </div >
        )
    }
}
export default BudgetCalculator;