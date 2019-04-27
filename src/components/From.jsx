import React, { Component } from 'react';
// import '../index.css';
import FAQ from './FAQ';

class From extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Default Title.',
            description: 'Default Description.'
        }
    }

    onChangeUserInputTitle(event) {
        const value = event.target.value;
        this.setState(state => ({
            title: value
        }))
    }

    onChangeUserInputDescription(event) {
        const value = event.target.value;
        this.setState(state => ({
            description: value
        }))
    }
    render() {
        return (
            <div>
                <div>
                    <p>Title: <input type="text" placeholder="Type title here" onChange={this.onChangeUserInputTitle.bind(this)} /></p>
                    <p>Description: <textarea placeholder="Type text here" id="" cols="30" rows="10" onChange={this.onChangeUserInputDescription.bind(this)}></textarea></p>
                </div>
                <div>
                    <h1>{this.state.title}</h1>
                </div>

                <div>
                    <FAQ
                        title={this.state.title}
                        description={this.state.description}
                    />
                    <hr/>
                </div>
            </div>
            
        )
    }

}

export default From;