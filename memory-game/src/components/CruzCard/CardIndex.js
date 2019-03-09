import React, { Component } from "react";
import "./CardStyle.css";



class CardIndex extends Component {
    // add constructor to initiate state for component instance

    // constructor(props) {
    //     super(props);

    // }

    componentDidMount() {
        // console.log(this.props);
    }



    render() {
        return (
            <div className="card" onClick={() => this.props.cardClick(this.props.id)}>

                <div className="img-container">
                    <img alt={this.props.name} src={this.props.image} 
                    />
                </div>
            </div>
        );
    }

}


// function App() {
//     return <HeaderIndex />
// }

export default CardIndex;