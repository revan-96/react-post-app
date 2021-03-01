import React from 'react';
import './NewPost.scss';
import CreatePost from '../CreatePost/CreatePost';

class NewPost extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        //submit post to common store
        console.log(e);
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

export default NewPost;