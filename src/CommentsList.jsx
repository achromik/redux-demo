import React from 'react';
//import Comment from './Comment.jsx';
import Comment from "./CommentContainer";

const CommentsList = ({comments}) => 
    <div>
        <ul className='list-group w-50 mx-auto'>
            {comments.map( comment => 
                <Comment 
                    key={comment.id}
                    {...comment}
                />
                // <CommentContainer key={comment.id}
                //      {...comment} />
            )}
        </ul>
    </div>;

export default CommentsList;