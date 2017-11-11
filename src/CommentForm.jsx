import React from 'react';

const CommentForm = ({createComment}) => 
    <div className='w-25  mx-auto'>
        <form onSubmit={(event) => {
                    event.preventDefault();
                    if(this.input.value) {
                        createComment(this.input.value);
                    }
                    this.input.value='';
                }}>
            <div className='form-group' >
                <label className='col-form-label'>Enter a comment: </label>
                <input 
                    placeholder="New comment"
                    className="form-control"
                    type="text" 
                    ref = {input => {this.input = input}}
                    onChange={this.handleOnChange} 
                />
            </div>
        </form>
    </div>;

export default CommentForm;