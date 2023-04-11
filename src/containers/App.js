import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import {fighter} from '../components/fighter';


class App extends Component {
  constructor() {
    super()
    this.state = {
      fighter: fighter,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const filterFighter = this.state.fighter.filter(fighter => {
      return fighter.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1>Misfits</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList fighter = {filterFighter} />
        </Scroll>
      </div>
    );

  }  
}

export default App;