import {mainPageReducer, postReducer, searchReducer, tabReducer, viewReducer} from './reducers';
import expect from 'expect';

describe('post reducer', () => {
    it('should handle titleChange', () => {
        const startAction = {
        type: 'titleChange',
        value: 'test'
        };
        expect(postReducer({title: {value: '', Invalid: true}}, startAction)).toMatchObject({title: {value: 'test', Invalid: false}});
    });

    it('should handle bodyChange', () => {
        const startAction = {
        type: 'bodyChange',
        value: 'test'
        };
        expect(postReducer({body: {value: '', Invalid: true}}, startAction)).toMatchObject({body: {value: 'test', Invalid: false}});
    });

    it('should handle validSubmit', () => {
        const startAction = {
        type: 'validSubmit',
        value: {title: {value: 'test'}, body: {value: 'test'}}
        };
        expect(postReducer({title: {value: 'test', Invalid: true}, body: {value: 'test'}}, startAction)).toMatchObject({title: {value: ''}, body: {value: ''}});
    });

    it('should handle invalidSubmit', () => {
        const startAction = {
        type: 'invalidSubmit',
        value: {title: {value: ''}, body: {value: ''}}
        };
        expect(postReducer({title: {value: ''}, body: {value: ''}}, startAction)).toMatchObject({title: {Invalid: true}, body: {Invalid: true}});
    });

    it('should handle invalidSubmit', () => {
        const startAction = {
        type: 'invalidSubmit',
        value: {title: {value: ''}, body: {value: ''}}
        };
        expect(postReducer({title: {value: ''}, body: {value: ''}}, startAction)).toMatchObject({title: {Invalid: true}, body: {Invalid: true}});
    }); 

    it('should default to', () => {
        const startAction = {
            type: ''
        };
        expect(postReducer({}, startAction)).toEqual({});
    });
});

describe('tab reducer', () => {
    it('should handle pressed', () => {
        const startAction = {
          type: 'pressed',
          value: '1'
        };
        expect(tabReducer({pressed: ''}, startAction)).toMatchObject({pressed: '1'});
    })  

    it('should default to', () => {
        const startAction = {
            type: ''
        };
        expect(tabReducer({}, startAction)).toEqual({});
    });
});

describe('main page reducer', () => {
    it('should handle postAdded', () => {
        const startAction = {
          type: 'postAdded',
          post: {title: 'test', body: 'test'}
        };
        expect(mainPageReducer({posts: []}, startAction)).toMatchObject({posts: [{title: 'test', body: 'test'}]});
    });

    it('should handle search', () => {
        const startAction = {
          type: 'search',
          value: 'test'
        };
        expect(mainPageReducer({}, startAction)).toMatchObject({searchkey: 'test'});
    })  

    it('should default to', () => {
        const startAction = {
            type: ''
        };
        expect(mainPageReducer({}, startAction)).toEqual({});
    });
});

describe('search reducer', () => {
    it('should handle clearInput', () => {
        const startAction = {
          type: 'clearInput',
          post: {title: 'test', body: 'test'}
        };
        expect(searchReducer({}, startAction)).toMatchObject({showClear: false, value: ""});
    });

    it('should handle inputChange', () => {
        const startAction = {
          type: 'inputChange',
          value: 'test'
        };
        expect(searchReducer({}, startAction)).toMatchObject({showClear: true, value: 'test'});
    })    

    it('should handle inputChange without value', () => {
        const startAction = {
          type: 'inputChange',
          value: ''
        };
        expect(searchReducer({}, startAction)).toMatchObject({showClear: false, value: ''});
    })  

    it('should default to', () => {
        const startAction = {
            type: ''
        };
        expect(searchReducer({}, startAction)).toEqual({});
    });
});

describe('view reducer', () => {
    it('should handle expandPost', () => {
        const startAction = {
            type: 'expandPost',
            value: '1'
        };
        expect(viewReducer({}, startAction)).toMatchObject({expand: '1'});
    });

    it('should default to', () => {
        const startAction = {
            type: ''
        };
        expect(viewReducer({}, startAction)).toEqual({});
    });
});