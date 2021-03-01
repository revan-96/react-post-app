import React from 'react';
import './TabHeader.scss';
import NewPost from '../NewPost/NewPost';

class TabHeader extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        //submit post to common store
        console.log(e);
    }

    render() {
        return;
    }
}

export default TabHeader;