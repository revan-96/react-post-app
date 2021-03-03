import React from 'react';
import Tab from './Tab';
import NewPost from '../NewPost/NewPost';
import ViewPost from '../ViewPost/ViewPost';

export default {
    component: Tab,
    subcomponents: { NewPost },
    title: 'Tab'
};

const Template = args => <Tab {...args}></Tab>;

export const Default = Template.bind({});
Default.args = {
    name: 'New Post',
    children: <NewPost/>
};

export const Alt = Template.bind({});

Alt.args = {
    name: 'View Post',
    children: <ViewPost/>
};

