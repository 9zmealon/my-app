import React, { Component } from 'react';
import '../App.css';

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phoneNumber: "",
            list: [
                {
                    "_id": "5c8f5e8f472382de00bf7c6c",
                    "name": "Spears",
                    "phoneNumber": "(953) 448-3926"
                  },
                  {
                    "_id": "5c8f5e8fe088a321001355bb",
                    "name": "Yvette",
                    "phoneNumber": "(952) 573-3969"
                  },
                  {
                    "_id": "5c8f5e8f5566da3252bc81bd",
                    "name": "Deleon",
                    "phoneNumber": "(862) 448-3386"
                  },
                  {
                    "_id": "5c8f5e8fb4c1fec8e235bf23",
                    "name": "Velma",
                    "phoneNumber": "(876) 407-2195"
                  },
                  {
                    "_id": "5c8f5e8fa3fed0f16719d591",
                    "name": "Cohen",
                    "phoneNumber": "(846) 590-3151"
                  },
                  {
                    "_id": "5c8f5e8f91d73aafda937195",
                    "name": "Thornton",
                    "phoneNumber": "(913) 405-2565"
                  },
                  {
                    "_id": "5c8f5e8f35497c89aac19f0a",
                    "name": "Head",
                    "phoneNumber": "(888) 546-2378"
                  },
                  {
                    "_id": "5c8f5e8fa5f6a2f912676605",
                    "name": "Robles",
                    "phoneNumber": "(902) 447-3750"
                  },
                  {
                    "_id": "5c8f5e8fd14f5df8d6909626",
                    "name": "Olga",
                    "phoneNumber": "(953) 406-2767"
                  }
            ],
            search: ''
        }
    }


    onChangeName(event) {
        this.setState({
            name: event.target.value
        })
    }
    onChangePhoneNumber(event) {
        this.setState({
            phoneNumber: event.target.value
        })
    }
    addToContact() {
        this.setState(state => ({
            list: [...state.list, { name: state.name, phoneNumber: state.phoneNumber }]
        }), () => console.log(this.state.list))
    }
    onChangeSearchValue(event) {
        this.setState({
            search: event.target.value
        })
    }
    searchList() {
        var list = this.state.list;
        return list.map((data, index) => {
            // var name = data.name
            if (data['name'].search(this.state.search) >=0) {
                return <li key={index}>{data.name}</li>
                
            }
            return ;
        });
    }
    render() {
        return (
            <div>
                <div style={{ float: "left" }}>
                    <input type="text" onChange={this.onChangeSearchValue.bind(this)} />
                    <br/>
                   <ul>
                         {this.searchList()}
                   </ul>
                </div>
                <div style={{ float: "right" }}>
                    <p>Name : <input type="text" onChange={this.onChangeName.bind(this)} /></p>
                    <p>Phone Number : <input type="text" onChange={this.onChangePhoneNumber.bind(this)} /></p>
                    <button onClick={this.addToContact.bind(this)}>Add Contact</button>
                </div>
            </div>
        )
    }
}

export default ContactList;