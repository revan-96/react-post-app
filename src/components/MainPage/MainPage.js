import React, { useReducer } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import TabBar from '../TabBar/TabBar';
import Tab from '../Tab/Tab';
import NewPost from '../NewPost/NewPost';
import ViewPost from '../ViewPost/ViewPost';
import { StyledMain } from './MainPageStyles';
import { mainPageReducer } from '../../reducers/reducers';

const initialState = {posts: [], searchkey: ''};

function MainPage(params) {
    const [state, dispatch] = useReducer(mainPageReducer, initialState);

    function getPosts() {
        const posts = state.posts.filter(post => {
            return post.title.includes(state.searchkey) || post.body.includes(state.searchkey);
        })
        return posts
    }

    return (
        <StyledMain>
            <SearchBar onSubmit={(e)=>dispatch({type: 'search', value: e})}></SearchBar> 
            <br/>
            <TabBar>
                <Tab name="NewPost"><NewPost onSubmit={(e)=>dispatch({type: 'postAdded', post: e})}></NewPost></Tab>
                <Tab name="Published"><ViewPost posts={getPosts()}></ViewPost></Tab>
            </TabBar>
        </StyledMain>
    )    
}

export default MainPage;