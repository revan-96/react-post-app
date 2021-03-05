import React from 'react';
import Tab from './Tab';

export default {
    component: Tab,
    title: 'Tab'
};

const Template = args => <Tab {...args}></Tab>;

export const Default = Template.bind({});
Default.args = {
    name: 'Sample Component',
    children: <div>Sample Component</div>
};

export const Active = Template.bind({});
Active.args = {
    name: 'Sample Component',
    children: <div>Sample Component</div>,
    active: true
};

