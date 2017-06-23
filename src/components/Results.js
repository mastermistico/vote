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
	votesReactInPercent() {
		if (this.props.react) {
			return (this.props.react / (this.props.angular 
					+  this.props.react + this.props.vuejs)) * 100 
		} else {
			return 0
		}
	}
	votesVuejsInPercent() {
		if (this.props.vuejs) {
			return (this.props.vuejs / (this.props.angular 
					+  this.props.react + this.props.vuejs)) * 100 
		} else {
			return 0
		}
	}

	votesAngularInPercentStyle () {
		return {
			width: this.votesAngularInPercent() + '%'
		}
	}

	votesReactInPercentStyle () {
		return {
			width: this.votesReactInPercent() + '%'
		}
	}

	votesVuejsInPercentStyle () {
		return {
			width: this.votesVuejsInPercent() + '%'
		}
	}
render() {	
	return (
			<div>
				<span className="label label-danger">
					Angular: {this.votesAngularInPercent().toFixed(2) + '%'}
				</span>
				<div className="progress progress-triped active">
					<div className="progress-bar progress-bar-danger" style={this.votesAngularInPercentStyle()}>

					</div>
				</div>
			    <span className="label label-info">
					React: {this.votesReactInPercent().toFixed(2) + '%'}
				</span>
				<div className="progress progress-triped active">
					<div className="progress-bar progress-bar-danger" style={this.votesReactInPercentStyle()}>
					
					</div>
				</div>
				<span className="label label-success">
					Vue.js: {this.votesVuejsInPercent().toFixed(2) + '%'}
				</span>
				<div className="progress progress-triped active">
					<div className="progress-bar progress-bar-danger" style={this.votesVuejsInPercentStyle()}>
					
					</div>
				</div>
			</div>
	
		)
	}

}

const mapStateToProps = store => {
  return {
    angular: store.angular,
    react: store.react,
    vuejs: store.vuejs
  }
}

export default connect(mapStateToProps)(Results)