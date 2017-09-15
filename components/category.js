import React, {Component} from 'react';

export default class Cat extends Component{
  render(){
    return (
      <div className="container" id="cat">
        <div className="row">
          <h1 className="text-center">Browse by Category</h1>
          <div className="col-md-6">
            <p >Hacking</p>
          </div>
          <div className="col-md-6">
            <p className="text-center">Hacking</p>
          </div>
        </div>
      </div>
    )
  }
}
