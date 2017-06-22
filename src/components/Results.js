import React from 'react';
import { connect } from 'react-redux';

const Results = () => {
	return (
			<div>
				<span className="label label-danger">
					Angular: {votesAngularInPercent().toFixed(2) + '%'}
				</span>
				<div className="progress progress-triped active">
					<div className="progress-bar progress-bar-danger">

					</div>
				</div>
				<span className="label label-danger">
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
				</div>
			</div>
		)
}

export default Results