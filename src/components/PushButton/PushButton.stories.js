import React from 'react';
import PushButton from './PushButton';

export default {
    component: PushButton,
    title: 'PushButton',
    argTypes: { onClick: { action: 'clicked' } }
};

const Template = args => <PushButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    pressed: false,
    label: 'New Post'
};

