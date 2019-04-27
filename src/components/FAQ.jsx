import React, {Component} from "react";

class FAQ extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : 'Default Title.',
            description : 'Default Description.',
            show:false,
            value: 'show'
        }
    }

    onClickHandler(){
        this.setState(state=>({
            show : state.show ? false : true
        }))

        this.setState(state=>({
            value : state.show ? 'hide' : 'show'
        }))
        
    }

    // userInput(){
    //     this.setState(state=>{
    //         title: state.title
    //     })
    // }

    render(){
        return (
            <div> 
                <h1>{this.props.title || this.state.title}</h1>
                <button onClick={() => this.onClickHandler()}>{this.state.value}</button>
                {/* {this.onClickHandler.bind(this)} */}
                <p>{this.state.show ? this.props.description: ""}</p>
            </div>
        )
    }
}


export default FAQ;