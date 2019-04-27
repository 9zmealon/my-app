import React, {Component} from 'react';


class Card extends Component {
    render(){
        return(
            <div>
                <img src={this.props.image || "https://picsum.photos/200/300/?random"} alt=""/>
                <h1>A Picture Card.</h1>
                <p>{this.props.title || this.props.children}</p>
            </div>
        )
    }
}
//5463#9843
export default Card;