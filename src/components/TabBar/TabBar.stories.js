import React from 'react';
import TabBar from './TabBar';
import Tab from '../Tab/Tab';
import { Default, Alt } from '../Tab/Tab.stories';

export default {
    component: TabBar,
    subcomponents: { Tab },
    title: 'TabBar'
};

const TabBarTemplate = ({items, ...args}) => (    
    <TabBar {...args}>
        {items.map((item, index)=>{
            console.log(item)
            return <Tab key={index} {...item}></Tab>;
        })}
    </TabBar>
);

export const Empty = TabBarTemplate.bind({});
Empty.args = { items: [] };

export const OneItem = TabBarTemplate.bind({});
OneItem.args = { items: [Default.args] };

export const TwoItem = TabBarTemplate.bind({});
TwoItem.args = { items: [Default.args, Alt.args] };


