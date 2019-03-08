import React,{Component} from "react";
import CardIndex from "./components/CruzCard/CardIndex";
import HeaderIndex from "./components/Header/HeaderIndex";
import WrapperIndex from "./components/Wrapper/WrapperIndex";

import cruzs from "./components/cruzs.json";
// import CruzCard from "./components/CruzCard/CardIndex";

class App extends Component {
    state = {
        cruzs
    };

    render() {
        return (
            //TODO: finish wrapper
          <WrapperIndex> 
            <HeaderIndex>List</HeaderIndex>
            {this.state.cruzs.map(cruz => (
              <CardIndex
                id={cruz.id}
                key={cruz.id}
                image={cruz.image}
              />
            ))}
          </WrapperIndex>
        );
      }

} 


// function App() {
//     return <HeaderIndex />
// }

export default App;