import { useState } from 'react';

import { DoneTodos } from './components/Done';
import { NewTodos } from './components/NewTodos';

import { Screen, Text } from '@/components';
import { Tab } from '@/components/molecules/Tabs/Tabs';


const tabs = [
    { title: 'New', width: 100 },
    { title: 'Done', width: 120 },
];

export const TodoScreen = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (tab: number) => {
        setSelectedTab(tab);
    };

    return (
        <Screen>
            <Text preset="titleLg" marginBottom="s32">Todos</Text>


            <Tab
                tabs={tabs}
                initialTab={selectedTab}
                onTabChange={handleTabChange}
            />


            {selectedTab === 0 && <NewTodos />}
            {selectedTab === 1 && <DoneTodos />}
        </Screen>
    );
};
