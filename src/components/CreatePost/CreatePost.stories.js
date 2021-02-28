import React from 'react';
import CreatePost from './CreatePost';

export default {
    component: CreatePost,
    title: 'CreatePost',
    argTypes: { onSubmit: {action: 'submit'} }
};

const Template = args => <CreatePost {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Test',
    body: 'Test'
};

export const EmptyFields = Template.bind({});
EmptyFields.args = {
    title: '',
    body: ''
};

