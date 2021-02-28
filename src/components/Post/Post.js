import React from 'react';
import ReactMarkdown from 'react-markdown'
import './Post.scss';

class Post extends React.Component {

    render() {
        const title = this.props.title;
        const body = this.props.body;
        return (
            <div className="Post">
                <h1 className="Post-Title"><ReactMarkdown>{title}</ReactMarkdown></h1>
                <p className="Post-Body"><ReactMarkdown>{body}</ReactMarkdown></p>
            </div>
        )
    }
}

export default Post;