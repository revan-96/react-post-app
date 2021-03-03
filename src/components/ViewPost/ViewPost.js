import React from 'react';
import './ViewPost.css';

class ViewPost extends React.Component {
    
    render() {
        const title = this.props.title;
        const body = this.props.body;
        return (
            <div className="Post">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        )
    }
}

export default ViewPost;