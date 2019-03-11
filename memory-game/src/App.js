import React, { Component } from "react";
import CardIndex from "./components/CruzCard/CardIndex";
import HeaderIndex from "./components/Header/HeaderIndex";
import WrapperIndex from "./components/Wrapper/WrapperIndex";

import cruzs from "./components/cruzs.json";
// import CruzCard from "./components/CruzCard/CardIndex";

class App extends Component {
    // add constructor to initiate state for component instance
    constructor() {
        super();

        this.state = {
            cruzs: cruzs,
            score: 0,
            highScore: 0
        };
        this.cardClick = this.cardClick.bind(this);
    }

    componentDidMount() {
        console.log(this.state.cruzs);
    }

    cardClick(id) {
        let clickedCruzs = this.state.cruzs;
        const index = clickedCruzs.findIndex((cruz) => cruz.id === id);

        if (clickedCruzs[index].wasClicked) {
            this.setState({
                cruzs: this.resetWasClicked(cruzs),
                score: 0
            })
            alert("Game Over")
            return
        }


        clickedCruzs[index].wasClicked = true;


        this.setState({
            score: this.state.score + 1,
            highScore: this.state.highScore + 1,
            cruzs: this.shuffleCards(clickedCruzs)
        })
        console.log("clicked", id, index);
    }

    shuffleCards(cruzs) {
        for (var i = 0; i < cruzs.length - 1; i++) {
            var j = i + Math.floor(Math.random() * (cruzs.length - i));

            var temp = cruzs[j];
            cruzs[j] = cruzs[i];
            cruzs[i] = temp;
        }
        return cruzs;
    }

    resetWasClicked(cruzs) {
        for (var i = 0; i < cruzs.length; i++) {
            cruzs[i].wasClicked = false;
        }
        return cruzs;
    }


    render() {
        return (
            <WrapperIndex>
                <div className="row">
                    <HeaderIndex
                        score={this.state.score}
                        highScore={this.state.highScore}
                    />
                </div>
                {/* <div className="row"> */}
                {this.state.cruzs.map(cruz => (
                    // <div className="col-md-3">
                    <CardIndex
                        id={cruz.id}
                        key={cruz.id}
                        image={cruz.image}
                        cardClick={this.cardClick}
                    />
                    // </div>
                ))}
                {/* </div> */}
            </WrapperIndex>
        );
    }

}


export default App;