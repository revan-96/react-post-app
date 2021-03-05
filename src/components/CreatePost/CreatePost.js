import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Alert from '../Alert/Alert';
import { StyledCreatePost, StyledAlert, StyledBodyBox, StyledTitleBox } from './CreatePostStyles';
import { postReducer } from '../../reducers/reducers';

const initialState = {title: {value: '', Invalid: false}, body: {value: '', Invalid: false}};

function CreatePost(props) {   
    const [state, dispatch] = useReducer(postReducer, initialState);

    function handleSubmit(e) {
        e.preventDefault();
        if(state.title.value && state.body.value) {
            props.onSubmit({title: state.title.value, body: state.body.value})
            dispatch({type: 'validSubmit'});     
        } else {
            dispatch({type: 'invalidSubmit'});     
        }       
    }
    return (
        <StyledCreatePost>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <br/>
                    <StyledTitleBox 
                        value={state.title.value} 
                        Invalid={state.title.Invalid} 
                        onChange={(e) => dispatch({type: 'titleChange', value: e.target.value})}
                        onFocus={(e) => dispatch({type: 'titleChange', value: e.target.value})}/>                        
                    {state.title.Invalid && 
                        <StyledAlert>
                            <Alert>Title cannot be empty</Alert>
                        </StyledAlert>
                    }
                </label>
                <br/>
                <label>
                    Body:
                    <br/>
                    <StyledBodyBox 
                        value={state.body.value} 
                        Invalid={state.body.Invalid} 
                        onChange={(e) => dispatch({type: 'bodyChange', value: e.target.value})}
                        onFocus={(e) => dispatch({type: 'bodyChange', value: e.target.value})}/>                        
                    {state.body.Invalid && 
                        <StyledAlert>
                            <Alert>Body cannot be empty</Alert>
                        </StyledAlert>
                    }
                </label>
                <br/>
                <input type="submit" value="Publish"></input>
            </form>
        </StyledCreatePost>
    );
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