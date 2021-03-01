import React from 'react';
import PushButtonGroup from './PushButtonGroup';

export default {
    component: PushButtonGroup,
    title: 'PushButtonGroup'
};

const Template = args => <PushButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
    buttons : [
        {
            label: "New Post",
            onClick: () => {console.log('test')}
        }
    ]
};

