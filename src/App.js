import React, { Component } from "react";
import CharCard from "./components/CharCard"
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
class App extends Component {

  state = {
    characters
  };

 render() {
  return (
        <Wrapper>
          <NavBar>Clicky Game</NavBar>
          {this.state.characters.map(friend => (
            <CharCard
              id={characters.id}
              key={characters.id}
              image={friend.image}
            />
          ))}
          
        </Wrapper>
      );
          }
        }

export default App;
