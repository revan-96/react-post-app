import React from 'react';
import SearchBar from './SearchBar';

export default {
    component: SearchBar,
    title: 'SearchBar'
};

const Template = args => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {};