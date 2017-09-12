import React, {Component} from 'react';
import {render} from 'react-dom';

import Nav from '../components/navbar';
import Mimg from '../components/mainimg';
import SearchBar from '../components/searchBar';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="body">
        <Nav />
        <Mimg />
        <SearchBar />
      </div>
    )
  }
}
render(<App />, document.getElementById('root'));
