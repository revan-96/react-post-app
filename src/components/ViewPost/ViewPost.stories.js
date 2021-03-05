import React from 'react';
import ViewPost from './ViewPost';

export default {
    component: ViewPost,
    title: 'ViewPost'
};

const Template = args => <ViewPost {...args}></ViewPost>;

export const Empty = Template.bind({});
Empty.args = {
    posts: []
};

export const WithPost = Template.bind({});
WithPost.args = {
    posts: [{'title': 'Title', 'body': 'Body'}]
};
