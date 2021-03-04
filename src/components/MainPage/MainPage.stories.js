import React from 'react';
import MainPage from './MainPage';

export default {
    component: MainPage,
    title: 'MainPage'
};

const Template = args => <MainPage {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Test',
    body: 'Test',
};