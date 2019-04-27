import React, {Component} from 'react';
// import ToDoData from './ToDoData';
import './ToDo.css';

class ToDoDataFrontPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo : 'unknown'
        }
    }
    setData(){
        this.setState(state=>({
            todo : document.querySelector('input').value
        }))
        console.log(this.state.todo);
        
        document.querySelector('input').value = '';
    }
    render(){
        return(
            <div>
                <div className='left half'>
                    <div className='center'>
                        <input type="text" placeholder="Type To Do Here" className="roundXXLargeBorder"/>
                        <button className="circle addButton" onClick={this.setData.bind(this)}>+</button>
                    </div>
                </div>

                <div className='right half'>
                    <h2>To Do List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th className='roundXXLargeBorder'>To do</th>
                                {/* <th className='roundXXLargeBorder'>Status</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                        <p>{this.state.todo}</p>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ToDoDataFrontPage;