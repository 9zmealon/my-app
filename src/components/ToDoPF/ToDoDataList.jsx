import React, {Component} from 'react';
import ToDoData from './ToDoData';
import './ToDo.css';

class ToDoDataList extends Component{
    constructor(props){
        super(props);
        this.state = {
            taskList : []
        }
    }
    setData(){

    }
    render(){
        return(
            <div>
                <div className='left half'>
                    <div className='center'>
                        <input type="text" placeholder="Type To Do Here" class="roundXXLargeBorder"/>
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
                                <ToDoData/>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ToDoDataList;