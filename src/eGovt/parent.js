import React from 'react';
import { flexiConfig } from './MockData';
import Flexi from './Flexi';

class Parent extends React.Component {
  constructor(pstate, pname,props){
    super(props);
    this.state={userName:{},userState:{}};
    this.submitClick = this.submitClick.bind(this);
  }
  submitClick(pstate,pname,event){
    //console.log('submitClick: '+pname+' '+pstate);
    this.setState({userState:pstate, userName:pname});
  }
  render(){
    const data = flexiConfig.items;
    return(
      <div>
        <div>
        <Flexi config = { data } submitclick = {this.submitClick} />
        </div>
        <hr />
        { ((this.state.userName)&&(this.state.userState))?`User Entered values are ${this.state.userName} ${this.state.userState}`:null}
      </div>
    );
  }
}

export default Parent
