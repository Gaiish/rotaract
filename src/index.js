import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="jumbotron">
        <h1>Hey!!!</h1>
      </div>
    )
  }
}
render(<App />, document.getElementById('root'));
