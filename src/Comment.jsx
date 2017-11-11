import React from 'react';
import './Comment.css';
import swal from 'sweetalert';



const DELETE =   <svg width="21" height="21" className="theme-line-0">
                            <use xlinkHref="orion-svg-sprite.svg#delete-circle-1" />
                        </svg>,
    EDIT =  <svg width="21" height="21" className="theme-line-1">
                <use xlinkHref="orion-svg-sprite.svg#edit-button-1"/>
            </svg>,
    THUMB_UP = <svg width="18" height="21" className="theme-line-2">
                    <use xlinkHref="orion-svg-sprite.svg#like-1"/>
                </svg>,
    THUMB_DOWN = <svg width="21" height="21" className="theme-line-2">
                    <use xlinkHref="orion-svg-sprite.svg#unlike-1"/>
                </svg>;


const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, deleteComment, editComment}) => 
    <li className='Comment list-group-item'>
        <p className='lead'>
            {text}
        </p>
        <small className='d-block text-muted'>votes: {votes}</small> 
        <div className='btn-group'>    
            <button 
                type="button"
                className='btn btn-light' 
                onClick={() => thumbDownComment(id)}
            >
                {THUMB_DOWN}
            </button>
            <button 
                type="button"
                className='btn btn-light' 
                onClick={() => thumbUpComment(id)}
            >
                {THUMB_UP}
            </button>
        </div>
        <div className='btn-group ml-2'>
            <button 
                type="button"    
                className='btn btn-light' 
                onClick={() => deleteComment(id)}
            >
                {DELETE}
            </button>
            <button 
                type="button"
                className='btn btn-light' 
                onClick={() => {
                    swal({
                        text: 'Please edit selected comment',
                        content:{
                            element: 'input',
                            attributes: {
                                value: text
                            }
                        }
                    })
                    .then((value) => {
                        if (value) {
                            editComment(id, value); 
                        }
                    })
                }}
            >
                {EDIT}
            </button>
        </div>
    </li>;

export default Comment;


