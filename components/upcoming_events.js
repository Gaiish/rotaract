import React, {Component} from 'react';
import UpEv from './upcoming_event';

export default class UpComEv extends Component{
  render(){
    return(
      <div className="container" id="UpComEv">
        <div clasName="row">
          <h1 className="text-center">Up comming Events and Meetings in <b>Kampala</b></h1>
          <UpEv />
        </div>
      </div>
    )
  }
}
