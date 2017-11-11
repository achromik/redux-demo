import React from 'react';
//import {createComment} from './actions';


const CommentForm = ({createComment}) => 
    <div className='w-25  mx-auto'>
        <form onSubmit={(event) => {
                    event.preventDefault();
                    createComment(this.input.value);
                    this.input.value='';
                }}>
            <div className='form-group' >
                <label className='col-form-label'>Enter comment: </label>
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


// class CommentForm extends React.Component {
//     constructor({comments, createComment}){
//         super({comments, createComment});
//         this.state = {
//             text: ''
//         }
//         this.handleOnChange = this.handleOnChange.bind(this);
//         this.handleOnSubmit = this.handleOnSubmit.bind(this);
//     };

//     handleOnChange (event) {
//         this.setState({
//             text: event.target.value
//         })
//     }

//     handleOnSubmit(event) {
//         //alert('test');
//         event.preventDefault();
//         console.log('test');
//         createComment(this.state.text);
//         console.log('tssest');
//     }

//     render() {
//         return (
//             <div>
//                 <form  onSubmit={this.handleOnSubmit}>
//                     <input 
//                         type="text" 
                       
//                         onChange={this.handleOnChange} 
//                     />
//                 </form>
//             </div>
//         );
//     }
// }

export default CommentForm;