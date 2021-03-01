import React from 'react';
import './Tab.scss';
import NewPost from '../NewPost/NewPost';

class Tab extends React.Component {
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

export default Tab;