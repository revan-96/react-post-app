import React from 'react';
import PushButton from './PushButton';

export default {
    component: PushButton,
    title: 'PushButton'
};

const Template = args => <PushButton {...args}/>;

export const Default = Template.bind({});
Default.args = {
    children: 'New Post'
};

