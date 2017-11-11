import { connect } from "react-redux";
import CommentForm from './CommentForm.jsx';
import { createComment } from "./actions";

const mapDispatchToProps = dispatch => ({
    createComment: (text) => dispatch(createComment(text))
});

export default connect(null, mapDispatchToProps)(CommentForm);