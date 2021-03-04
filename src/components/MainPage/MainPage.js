import React, { useReducer } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import TabBar from '../TabBar/TabBar';
import Tab from '../Tab/Tab';
import NewPost from '../NewPost/NewPost';
import ViewPost from '../ViewPost/ViewPost';
import { StyledMain } from './MainPageStyles';

const initialState = {posts: [], searchkey: ''};

function reducer(state, action) {
    switch (action.type) {
        case 'postAdded':
            const posts = state.posts;
            posts.push(action.post);
        return {...state, posts: posts};
        case 'search':
        return {...state, searchkey: action.value};
        default:
        throw new Error();
    }
}

function MainPage(params) {
    const [state, dispatch] = useReducer(reducer, initialState);

    function getPosts() {
        const posts = state.posts.filter(post => {
            return post.title.includes(state.searchkey) || post.body.includes(state.searchkey);
        })
        return posts
    }

    function addPost(e) {
        console.log(e);
        dispatch({type: 'postAdded', post: e})
    }

    return (
        <StyledMain>
            <SearchBar onSubmit={(e)=>dispatch({type: 'search', value: e})}></SearchBar> 
            <br/>
            <TabBar>
                <Tab name="NewPost"><NewPost onSubmit={addPost}></NewPost></Tab>
                <Tab name="Published"><ViewPost posts={getPosts()}></ViewPost></Tab>
            </TabBar>
        </StyledMain>
    )    
}

export default MainPage;