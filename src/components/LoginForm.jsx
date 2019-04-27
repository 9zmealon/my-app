import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false
        }
    }
    onchangeCheck(event) {
        this.setState(state => ({
            check: !state.check
        }))
        console.log(this.state.check);
    }
    addData(){
        if(this.state.check===true){
            alert('clicked')
        }
        else{
            alert('cannot proceed')
        }
    }
    render(){
        return(
            <div>
                <div>
                    <p>User Name : <input type="text" placeholder="UserName here." /></p>
                    <p>Password : <input type="text" placeholder="Password here." /></p>
                    <p><input type="checkbox" checked={this.state.check} onChange={this.onchangeCheck.bind(this)} /></p>
                    <button onClick={this.addData.bind(this)}>submit</button>
                </div>
            </div>
    
        )
    }
}

export default LoginForm;