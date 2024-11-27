import React from 'react';
import { Dimensions } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import {
    Box,
    BoxProps,
    Icon,
    Text,
    TextProps,
    TouchableOpacityBox,
    TouchableOpacityBoxProps,
} from '@/components';
import { useAppSafeArea } from '@/hooks';
import { mapScreenToPropsApp } from '@/utils/tabBarData/privateMapScreenProps';

const { width } = Dimensions.get('window');

export type AppTabBottomTabParamListApp = {
    Carga: undefined;
    Leitura: undefined;
    Envio: undefined;
    Configuracao: undefined;
};

export function AppTabBarApp({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) {
    const { bottom } = useAppSafeArea();
    return (
        <Box {...$boxWrapper} style={[{ paddingBottom: bottom }, {}]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const tabItem =
                    mapScreenToPropsApp[route.name as keyof AppTabBottomTabParamListApp];

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({
                            name: route.name,
                            params: route.params,
                            merge: true,
                        });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacityBox
                        key={route.name}
                        {...$itemWrapper}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <Box
                            {...(isFocused && $iconBox)}
                            width={64}
                            height={32}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Icon
                                color={isFocused ? 'primary' : 'backgroundContrast'}
                                size={28}
                                name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
                            />
                        </Box>
                        <Text
                            {...$label}
                            marginTop="s8"
                            preset="mediumLg"
                            fontSize={10}
                            style={{ fontSize: (width / 375) * 12 }}
                            color={isFocused ? 'primary' : 'backgroundContrast'}
                        >
                            {tabItem.label}
                        </Text>
                    </TouchableOpacityBox>
                );
            })}
        </Box>
    );
}

const $label: Omit<TextProps, 'children'> = {
    marginTop: 's4',
    preset: 'bodyMd',
};

const $itemWrapper: TouchableOpacityBoxProps = {
    activeOpacity: 1,
    alignItems: 'center',
    accessibilityRole: 'button',
};

const $boxWrapper: BoxProps = {
    paddingTop: 's8',
    backgroundColor: 'neutralBaseMenu',
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: 'neutral100',
};

const $iconBox: BoxProps = {
    borderRadius: 's16',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'primary100',
};
