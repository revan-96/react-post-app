import React from 'react';
import PropTypes from 'prop-types';
import CreatePost from '../CreatePost/CreatePost';
import { StyledNewPostCont, StyledNewPost } from './NewPostStyles';

class NewPost extends React.Component {
    constructor(props) {
        super(props)
        this.onSubmit = props.onSubmit;
    }

    render() {
        return(
            <StyledNewPostCont>
                <StyledNewPost>
                    <CreatePost onSubmit={this.onSubmit}></CreatePost>
                </StyledNewPost>
            </StyledNewPostCont>
        );
    }
}

NewPost.propTypes = {
    onSubmit: PropTypes.func
};

NewPost.defaultProps = {
    onSubmit: undefined
};

export default NewPost;