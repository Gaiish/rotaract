import React, {Component} from 'react';
import {render} from 'react-dom';

import Nav from '../components/navbar';
import Mimg from '../components/mainimg';
import SearchBar from '../components/searchBar';
import UpComEv from '../components/upcoming_events';

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
        <UpComEv />
      </div>
    )
  }
}
render(<App />, document.getElementById('root'));
