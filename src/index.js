import React, {Component} from 'react';
import {render} from 'react-dom';

import Nav from '../components/navbar';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Nav />
      </div>
    )
  }
}
render(<App />, document.getElementById('root'));
