import React from 'react';
import { connect } from 'react-redux';
import Results from './components/Results';
import { voteAngular, voteReact, voteVuejs } from './actions';
import './App.css';
    

export const App = (vote) => {

     return(
         <div>
            <div className="jumbotron" style={{'textAlign':'center'}}>
              <img src="ctsw_logo.png" height="96" alt="Votemain"></img>
              <h2>Cual es tu framewor/libreria favorita</h2>
              <h4>Click en los logos para votar</h4>
              <br />
              <div className="row">
                <div className="col-xs-offset-3 col-xs-2">
                  <img src="angular_logo.png" height="96" alt="Angular" onClick={() => vote.voteAngular()}></img>
                </div>
                <div className="col-xs-2">
                  <img src="react_logo.png" height="96" alt="Angular" onClick={() => vote.voteReact()}></img>
                </div>
                <div className="col-xs-2">
                  <img src="vuejs_logo.png" height="96" alt="Angular" onClick={() => vote.voteVuejs()}></img>
                </div>
              </div>
            </div>
            <Results />
         </div>
    );
}

const  mapStateToProps = (state) =>  {

    console.log(state)
    return {
      angular: 0,
      react: 0,
      vuejs: 0
    }
    
  }

const mapDispatchToProps = dispatch => {

  return {
     voteReact(){
        dispatch(voteReact())
     },
     voteAngular(){
        dispatch(voteAngular())
     },
     voteVuejs(){
        dispatch(voteVuejs())
     }     
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
