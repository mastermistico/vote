import React, { Component } from 'react';
import { connect } from 'react-redux';

class  Results extends Component {
	constructor(props) {
		super(props);
		console.log(this.props)
		//this.store = this.props.store;
	}

	votesAngularInPercent() {
		if (this.props.angular) {
			return (this.props.angular / (this.props.angular 
					+  this.props.react + this.props.vuejs)) * 100 
		} else {
			return 0
		}
	}

render() {	
	return (
			<div>
				<span className="label label-danger">
					Angular: {this.votesAngularInPercent() + '%'}
				</span>
				<div className="progress progress-triped active">
					<div className="progress-bar progress-bar-danger">

					</div>
				</div>
			</div>
		)
}

				/*<span className="label label-danger">
					React: {votesReactInPercent().toFixed(2) + '%'}
				</span>
				<div className="progress progress-triped active">
					<div className="progress-bar progress-bar-danger">
					
					</div>
				</div>	
				<span className="label label-danger">
					Vue.js: {votesVuejsInPercent().toFixed(2) + '%'}
				</span>
				<div className="progress progress-triped active">
					<div className="progress-bar progress-bar-danger">
					
					</div>
				</div>*/
}

const mapStateToProps = store => {
  return {
    angular: store.angular,
    react: store.react,
    vuejs: store.vuejs
  }
}

export default connect(mapStateToProps)(Results)