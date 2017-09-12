import React, {Component} from 'react';

export default class SearchBar extends Component{
  render(){
    return(
      <div className="container" id="search-form">
        <div className="jumbotron">
          <h1>Find Meetings and Events</h1>
          <form>
            <div className="form-inline">
              <input type="search" className="form-control" placeholder="search events"  />
              <input className="form-control" placeholder="Kampala" />
              <select className="form-control">
                <option selected>this week</option>
              </select>
              <button type="submit" className="btn btn-primary">Search</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
