import React from 'react';
import NewPost from './NewPost';

export default {
    component: NewPost,
    title: 'NewPost'
};

const Template = args => <NewPost {...args} />;

export const Default = Template.bind({});
Default.args = {};

