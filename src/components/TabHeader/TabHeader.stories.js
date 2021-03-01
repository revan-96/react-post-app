import React from 'react';
import TabHeader from './TabHeader';

export default {
    component: TabHeader,
    title: 'TabHeader'
};

const Template = args => <TabHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};

