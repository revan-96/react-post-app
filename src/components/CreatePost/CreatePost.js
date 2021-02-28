import React from 'react';
import PropTypes from 'prop-types';
import './CreatePost.scss';

class CreatePost extends React.Component {
    constructor({title, body, onSubmit}) {
        super({title, body})
        this.state = {title: {value: title, Invalid: false}, body: {value: body, Invalid: false}};
        this.onSubmit = onSubmit;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }
    
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)
        if(name == 'title') {
            this.setState({title: {value: value}});
        } else if (name == 'body') {
            this.setState({body: {value: value}});
        }
    }

    handleSubmit(e) {
        console.log(e);
        e.preventDefault();
        if(!this.state.title.value) {
            this.setState({title: {Invalid: true}});
            return;
        } if (!this.state.body.value) {
            this.setState({body: {Invalid: true}});
            return;
        }
        this.onSubmit();
    }

    handleFocus(e) {
        const name = e.target.name;
        if(name == 'title') {
            this.setState({title: {Invalid: false}});
        } else if (name == 'body') {
            this.setState({body: {Invalid: false}});
        }
    }    

    render() {        
        return (
            <div className="CreatePost">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <br/>
                        <textarea className={'CreatePost-Title' + (this.state.title.Invalid ? ' CreatePost-Title-Red' : '')} name="title" value={this.state.title.value} onChange={this.handleChange} onFocus={this.handleFocus}/>                        
                    </label>
                    <br/>
                    <label>
                        Body:
                        <br/>
                        <textarea className={'CreatePost-Body' + (this.state.body.Invalid ? ' CreatePost-Body-Red' : '')} name="body" value={this.state.body.value} onChange={this.handleChange} onFocus={this.handleFocus}/>                        
                    </label>
                    <br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

CreatePost.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    onSubmit: PropTypes.func
};

CreatePost.defaultProps = {
    title: '',
    body: '',
    onSubmit: undefined
};


export default CreatePost;