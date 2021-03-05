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
        throw new Error();
    }
}

export function tabReducer(state, action) {
    switch (action.type) {
        case 'pressed':
        return {...state, pressed: action.value};
        default:
        throw new Error();
    }
}

