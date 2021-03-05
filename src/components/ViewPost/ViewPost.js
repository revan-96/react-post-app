import React, { useReducer, useEffect } from 'react';
import { StyledPostView, StyledPostCont, StyledPost } from './ViewPostStyles.js';
import Post from '../Post/Post';
import { viewReducer } from '../../reducers/reducers.js';

const initialState = {expand: ""};

function AddScroll (WrappedComponent) {

    return class extends React.Component{  
        constructor(props) {
            super(props)
            console.log(props)
            this.myRef = React.createRef();
            this.handleClick = this.handleClick.bind(this);  
        }    

        handleClick(e) {
            this.props.onClick(e)
            this.executeScroll(e)
        }
    
        render() {
            return (
                <> 
                <StyledPostCont ref={this.myRef} onClick={this.handleClick} >
                    <StyledPost>
                        <WrappedComponent {...this.props}></WrappedComponent>
                    </StyledPost>                          
                </StyledPostCont>
                </>
            )
        }  
    
        executeScroll = () => this.myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
 }

export function ViewPost (props) {
    const [state, dispatch] = useReducer(viewReducer, initialState);
    return (
        <StyledPostView>
        {
            props.posts.map((post, index) => {
                const expand = state.expand == index.toString();
                const PostWithScroll = AddScroll(Post);
                return <PostWithScroll                            
                            key={index}                            
                            expand={expand}
                            onClick={() => dispatch({type: 'expandPost', value: index})}
                            title={post.title} body={post.body}></PostWithScroll>
            })
        }
        {!props.posts.length &&
            <StyledPostCont><StyledPost expand={true}><Post body={`<div align="center">No Posts to Show</div>`}></Post></StyledPost></StyledPostCont> 
        }
        </StyledPostView>
    )
}

export default ViewPost;