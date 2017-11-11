import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer.js'
import CommentForm from './CommentFormContainer.js';

import DevTools from './DevTools';

const App = () => {
	return (
		<div className="App">
			<CommentForm className='App-header'/>
			<CommentsListContainer/>
			<DevTools />
		</div>
	);
};

export default App;