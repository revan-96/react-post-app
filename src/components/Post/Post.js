import React from 'react';
import { StyledPost } from './PostStyles';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

class Post extends React.Component {

    render() {
        const title = this.props.title;
        const body = this.props.body;
        return (
            <StyledPost>
                <h1>{title}</h1>
                <div><ReactMarkdownWithHtml allowDangerousHtml >{body}</ReactMarkdownWithHtml></div>
            </StyledPost>
        )
    }
}

export default Post;