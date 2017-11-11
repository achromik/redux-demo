import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, deleteComment, editComment}) => 
    <li>
        {text} <span>votes: {votes}</span> 
        <button onClick={() => thumbUpComment(id)}>Thum up</button>
        <button onClick={() => thumbDownComment(id)}>Thum down</button>
        <button onClick={() => deleteComment(id)}>Delete</button>
        <button onClick={() => {
            const newText = prompt('Enter new comment\'s text');
            if(newText) editComment(id, newText)}} 
        >
            Edit
        </button>
    </li>;

export default Comment;