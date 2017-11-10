import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer.js'

const App = () => {
  return (
    <div className="App">
      Tu bedzie lista komentarzy!
      <CommentsListContainer/>
    </div>
  );
};

export default App;