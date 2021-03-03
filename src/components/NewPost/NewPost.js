import React from 'react';
import PropTypes from 'prop-types';
import './NewPost.scss';
import CreatePost from '../CreatePost/CreatePost';

class NewPost extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSubmit = props.onSubmit;
    }

    handleSubmit(e) {
        //submit post to common store
        console.log(e);
        this.onSubmit(e);
    }

    render() {
        return(
            <div className="NewPost">
                <div className="NewPost-Post">
                    <CreatePost onSubmit={this.handleSubmit}></CreatePost>
                </div>
            </div>
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