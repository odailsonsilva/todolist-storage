import React, { useState } from 'react';
import { Dimensions } from 'react-native';

import { Box, TouchableOpacityBox, TouchableOpacityBoxProps } from '../../atoms/Box/Box';
import { Text } from '../../atoms/Text';

const { width } = Dimensions.get('window');

interface TabData {
    title: string
    width?: number
}
interface TabProps {
    tabs: TabData[]
    initialTab: number
    onTabChange: (tab: number) => void
}
export const Tab = ({ tabs, initialTab, onTabChange }: TabProps) => {
    const [activeTab, setActiveTab] = useState(initialTab);

    const handleTabPress = (tab: number) => {
        setActiveTab(tab);
        onTabChange(tab);
    };

    return (
        <Box flexDirection="row" borderBottomWidth={1} borderBottomColor="neutral200" justifyContent="space-between">
            {tabs.map((tab, index) => {
                const isActivedTab = activeTab === index;

                const touchabeOpacityBoxActive: TouchableOpacityBoxProps = {
                    borderBottomColor: 'primary500',
                    borderBottomWidth: 2,
                };

                return (
                    <TouchableOpacityBox
                        key={tab.title}
                        onPress={() => handleTabPress(index)}
                        flex={1}
                        alignItems="flex-start"
                        paddingBottom="s16"
                        paddingHorizontal="s8"
                        {...!!tab.width && { maxWidth: (width / 375) * tab.width }}
                        {...isActivedTab && touchabeOpacityBoxActive}
                    >
                        <Text color={isActivedTab ? 'primary500' : 'neutral500'} preset="titleSm">{tab.title}</Text>
                    </TouchableOpacityBox>
                );
            })}
        </Box>
    );
};
