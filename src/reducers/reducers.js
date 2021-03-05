export function postReducer(state, action) {
    switch (action.type) {
        case 'titleChange':
        return {...state, title: {value: action.value, Invalid: false}};
        case 'bodyChange':
        return {...state, body: {value: action.value, Invalid: false}};
        case 'validSubmit': 
        return {...state, title: {value: ''}, body: {value: ''}};
        case 'invalidSubmit':
            var newState = {};
                if(!state.title.value) {
                    newState = {
                        ...newState,
                        title: {Invalid: true}                  
                    }
                } if(!state.body.value) {
                    newState = {
                        ...newState,
                        body: {Invalid: true}
                    }
                }
        return {...state, ...newState};
        default:
        return state;
    }
}

export function tabReducer(state, action) {
    switch (action.type) {
        case 'pressed':
        return {...state, pressed: action.value};
        default:
        return state;
    }
}

export function mainPageReducer(state, action) {
    switch (action.type) {
        case 'postAdded':
            const posts = state.posts;
            posts.push(action.post);
        return {...state, posts: posts};
        case 'search':
        return {...state, searchkey: action.value};
        default:
        return state;
    }
}

export function searchReducer(state, action) {
    switch (action.type) {
        case 'clearInput':
        return {showClear: false, value: ""};
        case 'inputChange':
            if(action.value) {
                return {showClear: true, value: action.value}                
            } else {
                return {showClear: false, value: action.value};
            }
        default:
        return state;  
    }
}

export function viewReducer(state, action) {
    switch (action.type) {
        case 'expandPost': 
        return {...state, expand: action.value};
        default:
        return state;     
    }
}

