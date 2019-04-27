import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LoginForm from './components/LoginForm';
import Card from './components/card';
import ToDoFrontPage from './components/ToDoPF/ToDoFrontPage';
import ApiReqRes from './apiReqRes';
import './App.css';
import BudgetCalculator from "./containerPages/budgetCalculator";
import ContactList from './containerPages/contactList.jsx'


class AppContainer extends React.Component {
    render(){
        return(
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/loginForm">LoginForm</Link>
                            </li>
                            <li>
                                <Link to="/card">Card</Link>
                            </li>
                            <li>
                                <Link to="/ToDoFPage">ToDo</Link>
                            </li>
                            <li>
                                <Link to="/apiReqRes">apiReqRes</Link>
                            </li>
                            <li>
                                <Link to="/budgetCalculator">BudgetCalculator</Link>
                            </li>
                            <li>
                                <Link to="/contactList">Contacy Lict</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* outer styling */}
                    <div className="inner-page">
                        <Route path="/loginForm" exact component={LoginForm} />
                        <Route path="/card" component={Card} />
                        <Route path="/ToDoFPage" component={ToDoFrontPage} />
                        <Route path="/apiReqRes" component={ApiReqRes} />
                        <Route path="/budgetCalculator" component={BudgetCalculator}/>
                        <Route path="/contactList" component={ContactList}/>
                        {/* <Route path="/" exact component={TestApi} /> */}
                        {/* <Route path="*" component={NotFound} /> */}
                    </div>
                </div>
            </Router>
        )
    }
}

export default AppContainer;