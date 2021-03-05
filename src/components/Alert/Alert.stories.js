import React from 'react';
import Alert from './Alert';

export default {
    component: Alert,
    title: 'Alert'
};

const Template = args => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: ''
};

export const WithMessage = Template.bind({});
WithMessage.args = {
    children: 'Hello'
};

