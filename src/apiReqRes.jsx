import React, {Component} from 'react';

class ReqRes extends Component{
    constructor(props){
        super(props);
        this.state={
            result : []
        }
    }

    componentDidMount(){
        this.apiRequest();
    }

        apiRequest(){
            fetch("https://reqres.in/api/users?page=2")
            .then(response => response.json())
            .then(json=>{
                this.setState({
                    result: json.data
                });
            })
            .catch(error => console.warn("error",error));
        }

        render(){
            return(
                <div>
                    {this.state.result.map((data,index)=>{
                        return(
                            <h1 key={index}>{data.first_name}</h1>
                        )
                    })}
                </div>
            )
        }
}
export default ReqRes;