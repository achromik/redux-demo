import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer.js'
import CommentForm from './CommentFormContainer.js';

const App = () => {
	return (
		<div className="App">
			<CommentForm className='App-header'/>
			<CommentsListContainer/>
		</div>
	);
};

export default App;