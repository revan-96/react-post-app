import React from 'react';
import PropTypes from 'prop-types';
import CreatePost from '../CreatePost/CreatePost';
import { StyledNewPostCont, StyledNewPost } from './NewPostStyles';

class NewPost extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSubmit = props.onSubmit;
    }

    handleSubmit(e) {
        //submit post to common store
        console.log(e);
        if(this.onSubmit){
            this.onSubmit(e);
        }
    }

    render() {
        return(
            <StyledNewPostCont>
                <StyledNewPost>
                    <CreatePost onSubmit={this.handleSubmit}></CreatePost>
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