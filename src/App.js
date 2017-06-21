import React, { Component } from 'react';
import { connect } from 'react-redux'
import { voteAngular, voteReact, voteVuejs } from './actions';
import './App.css';
    

class App extends React.Component {

  constructor(props){
    super(props)
    console.log(props)
    this.store = this.props.dispath;
  }

       handleVoteAngular()  {
    this.props.dispatch(voteAngular());
    console.log("angular")
  }

  render() {
     return(
         <div>
            <div className="jumbotron" style={{'textAlign':'center'}}>
              <img src="ctsw_logo.png" height="96" alt="Votemain"></img>
              <h2>Cual es tu framewor/libreria favorita</h2>
              <h4>Click en los logos para votar</h4>
              <br />
              <div className="row">
                <div className="col-xs-offset-3 col-xs-2">
                  <img src="angular_logo.png" height="96" alt="Angular" onClick={this.handleVoteAngular.bind(this)}></img>
                </div>
                <div className="col-xs-2">
                  <img src="react_logo.png" height="96" alt="Angular" onClick={this.handleVoteReact}></img>
                </div>
                <div className="col-xs-2">
                  <img src="vuejs_logo.png" height="96" alt="Angular" onClick={this.handleVoteVuejs}></img>
                </div>
              </div>
            </div>
         </div>
    );
  }



    handleVoteReact = () => {
    this.props.dispath(voteReact());
  }

    handleVoteVuejs = () => {
    this.store.dispath(voteVuejs());
  }
}      
  
  

export default connect(voteAngular)(App);
