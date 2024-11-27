import { useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';

import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import { ScrollView } from 'react-native-gesture-handler';

import { useAppSafeArea } from '../../../hooks/useAppSafeArea';
import { Box } from '../../atoms/Box/Box';
import { Button } from '../../atoms/Button/Button';
import { Text } from '../../atoms/Text';



const { height } = Dimensions.get('window');

export interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    animationType?: 'fade' | 'none' | 'slide' | undefined;
    cancel?: string;
    confirm?: string;
    onConfirmation?: () => void;
    visabledButtons?: boolean;
    visibleHeader?: boolean;
    title?: string;
    children?: React.ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
    description?: string;
    refParam?: React.RefObject<ActionSheetRef>
    hasController?: boolean
    gestureEnabled?: boolean
    maxHeight?: number
}

export function Modal({
    isOpen,
    onClose,
    cancel,
    confirm,
    visabledButtons = false,
    onConfirmation,
    visibleHeader = false,
    title,
    children,
    isLoading = false,
    disabled = false,
    description,
    refParam,
    hasController = true,
    gestureEnabled = true,
    maxHeight,
}: ModalProps) {
    const actionSheetRef = useRef<ActionSheetRef>(null);
    const { bottom } = useAppSafeArea();

    const showActionSheet = () => {
        if (hasController) {
            actionSheetRef.current?.show();
        } else if (refParam) {
            refParam.current?.show();
        }
    };

    const handleOnClose = () => {
        if (hasController) {
            actionSheetRef.current?.hide();
            onClose && onClose();
        } else if (refParam) {
            refParam.current?.hide();
        }
    };

    useEffect(() => {
        if (hasController) {
            if (isOpen) {
                showActionSheet();
            } else if (!isOpen) {
                handleOnClose();
            }
        }
    }, [isOpen, hasController]);

    return (
        <ActionSheet
            ref={refParam ? refParam : actionSheetRef}
            overlayColor="black"
            gestureEnabled={gestureEnabled}
            onClose={handleOnClose}
        >
            <Box
                margin="s16"
                style={{
                    marginBottom: bottom + 20,
                }}
            >
                {visibleHeader && (
                    <Box padding="s20">
                        <Text preset="titleLg">{title}</Text>
                        {description && <Text preset="bodyMd" color="neutral700" mt="s4">{description}</Text>}
                    </Box>
                )}
                <ScrollView style={[{ paddingHorizontal: 20 }]}>
                    {children}
                </ScrollView>
                {visabledButtons &&
                    <Box flexDirection="row" alignItems="center" mt="s24" padding="s20" style={{ paddingBottom: 0 }}>
                        <Button
                            title={cancel || ''}
                            preset="primaryOutline"
                            width={onConfirmation ? '50%' : '100%'}
                            fullWidth={false}
                            disabled={isLoading}
                            onPress={handleOnClose}
                        />
                        {onConfirmation && (
                            <Button
                                title={confirm || ''}
                                fullWidth={false}
                                width="50%"
                                ml="s8"
                                loading={isLoading}
                                disabled={disabled}
                                onPress={() => {
                                    if (onConfirmation) {
                                        onConfirmation();
                                    }
                                    handleOnClose();
                                }}
                            />
                        )}
                    </Box>
                }
            </Box>
        </ActionSheet>
    );
}
