import {postReducer, tabReducer} from './reducers';
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
        // it's empty on purpose because it's just starting to fetch posts
        expect(postReducer({body: {value: '', Invalid: true}}, startAction)).toMatchObject({body: {value: 'test', Invalid: false}});
    });

    it('should handle validSubmit', () => {
        const startAction = {
        type: 'validSubmit',
        value: {title: {value: 'test'}, body: {value: 'test'}}
        };
        // it's empty on purpose because it's just starting to fetch posts
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

});

describe('tab reducer', () => {
    it('should handle pressed', () => {
        const startAction = {
          type: 'pressed',
          value: '1'
        };
        expect(tabReducer({pressed: ''}, startAction)).toMatchObject({pressed: '1'});
    })  
});