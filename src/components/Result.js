import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
 
function Result(props) {
	return (
		<ReactCSSTransitionGroup
			className="container result"
			component ="div"
			transitionName="fade"
			transitionEnterTimeout={800}
			transitionLeaveTimeout={500}
			transitionAppear
			transitionAppearTimeout={500}
		>
			<div>
				<p>
				You are <strong>{props.quizResult}  
				<br/>
				<br/>
				Click <a href="https://en.wikipedia.org/wiki/Universal%27s_Islands_of_Adventure" target="_newtab">here</a> to learn more about this park!</strong>
				</p>
			</div>
		</ReactCSSTransitionGroup>
	);
}
 
Result.propTypes = {
	quizResult: PropTypes.string.isRequired,
};
 
export default Result;	