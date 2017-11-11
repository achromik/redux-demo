import { connect } from "react-redux";
import Comment from './Comment.jsx'
import { thumbUpComment, thumbDownComment, deleteComment, editComment } from "./actions";

const mapDispatchToProps = dispatch => ({
    thumbUpComment: (id) => dispatch(thumbUpComment(id)),
    thumbDownComment: (id) => dispatch(thumbDownComment(id)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    editComment: (id, text) => dispatch(editComment(id, text))
});

export default connect(null, mapDispatchToProps)(Comment);