import React from 'react';
import PushButtonGroup from './PushButtonGroup';
import PushButton from '../PushButton/PushButton';
import { Default } from "../PushButton/PushButton.stories";

export default {
    component: PushButtonGroup,
    subcomponents: { PushButton },
    title: 'PushButtonGroup'
};

const PushButtonGroupTemplate = ({items, ...args}) => (    
    <PushButtonGroup>
        {items.map((item, index)=>{
            return <PushButton key={index} {...item}/>;
        })}
    </PushButtonGroup>
);

export const Empty = PushButtonGroupTemplate.bind({});
Empty.args = { items: [] };

export const OneItem = PushButtonGroupTemplate.bind({});
OneItem.args = { items: [Default.args] };

