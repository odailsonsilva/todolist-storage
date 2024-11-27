import React from 'react';

import { Box } from '../components/atoms/Box/Box';
import { Button } from '../components/atoms/Button/Button';
import { Text } from '../components/atoms/Text';
import { Modal } from '../components/molecules/Modal/Modal';

interface IConfirmationModal {
    onConfirm: Function;
    onClose: (clicked?: boolean) => void;
    title: string;
    description: string;
    cancel: string;
    confirm: string;
}

const defaultParams: Partial<IConfirmationModal> = {
    onConfirm: () => {
    },
    title: 'Confirme a ação',
    description: 'Essa ação é irreversível',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
};

export const useConfirmation = (params: Partial<IConfirmationModal>) => {
    const [open, setOpen] = React.useState(false);
    const [
        { onConfirm, title, description, cancel, confirm, onClose },
        setState,
    ] = React.useState({
        ...defaultParams,
        ...params,
        onClose: (clicked?: boolean) => {
            if (!clicked) {
                onConfirmRef.current = () => { };
            }
            if (params.onClose && clicked) {
                params.onClose();
            }
            setOpen(false);
        },
    } as IConfirmationModal);

    const onConfirmRef = React.useRef(onConfirm);
    const onCloseRef = React.useRef(onClose);

    const updateOnConfirm = (newOnConfirm: Function) => {
        onConfirmRef.current = newOnConfirm;
    };
    const updateOnClose = (newOnClose: () => void) => {
        onCloseRef.current = (clicked?: boolean) => {
            if (!clicked) {
                onConfirmRef.current = () => { };
            }

            if (clicked) {
                newOnClose();
            }
            setOpen(false);
        };
    };
    const updateOnConfirmAndOpenModal = (newOnConfirm: Function) => {
        onConfirmRef.current = newOnConfirm;
        setOpen(true);
    };
    const updateOnCloseAndOpenModal = (newOnClose: () => void) => {
        onCloseRef.current = newOnClose;
        setOpen(true);
    };
    const updateModalStateAndOpenModal = ({
        onConfirm = () => { },
        onClose = (clicked?: boolean) => {
            if (clicked) {
                onConfirmRef.current = () => { };
            }
            if (params.onClose && clicked) {
                params.onClose();
            }
            setOpen(false);
        },
        ...newState
    }: Partial<IConfirmationModal> & { onConfirm?: Function }) => {
        onConfirmRef.current = onConfirm;
        onCloseRef.current = (clicked?: boolean) => {
            if (clicked) {
                onConfirmRef.current = () => { };
            }
            if (onClose && clicked) {
                onClose();
            }
            setOpen(false);
        };

        setState((oldState) => ({ ...oldState, ...newState }));

        setOpen(true);
    };

    const openConfirmModal = () => {
        setOpen(true);
    };

    const renderModal = () => {
        return (
            <Modal
                isOpen={open}
                onClose={() => onClose(false)}
            >
                <Box>
                    <Text preset="titleLg" pt="s20">{title}</Text>
                    <Text preset="bodyMd" color="neutral700" mt="s16">{description}</Text>

                    <Box flexDirection="row" alignItems="center" mt="s24" mr="s20">
                        <Button
                            title={cancel}
                            preset="primaryOutline"
                            width="50%"
                            fullWidth={false}
                            onPress={() => {
                                onCloseRef.current(true);
                            }}
                        />
                        <Button
                            title={confirm}
                            fullWidth={false}
                            width="50%"
                            ml="s8"
                            onPress={() => {
                                onConfirmRef.current();
                                onCloseRef.current();
                            }}
                        />
                    </Box>
                </Box>
            </Modal>
        );
    };

    return {
        renderModal,
        updateOnConfirm,
        openConfirmModal,
        updateModalStateAndOpenModal,
        updateOnConfirmAndOpenModal,
        updateOnClose,
        updateOnCloseAndOpenModal,
    };
};
