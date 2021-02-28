import React from 'react';
import Post from './Post';

export default {
    component: Post,
    title: 'Post'
};

const Template = args => <Post {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Test',
    body: 'Test',
};