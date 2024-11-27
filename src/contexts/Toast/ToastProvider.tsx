import { useEffect, useState } from 'react';

import { ShowToastProps } from './Interface/IToastContext';
import { ToastContext } from './ToastContext';

import { CustomToast, ToastPreset } from '@/components';


export const ToastProvider = ({ children }: any) => {
    const [toastMessage, setToastMessage] = useState('');
    const [toastTitle, setToastTitle] = useState('');
    const [toastType, setToastType] = useState<ToastPreset>('info');
    const [toastDuration, setToastDuration] = useState(5000);

    useEffect(() => {
        if (toastMessage) {
            const timeout = setTimeout(() => {
                closeToast();
            }, toastDuration);
            return () => clearTimeout(timeout);
        }
    }, [toastMessage, toastDuration]);

    const showToast = ({
        message,
        title,
        type,
        duration = 5000,
    }: ShowToastProps) => {
        setToastMessage(message);
        setToastType(type);
        setToastDuration(duration);
        setToastTitle(title);
    };

    const closeToast = () => {
        setToastMessage('');
    };

    return (
        <ToastContext.Provider
            value={{
                showToast,
            }}
        >
            {children}
            {toastMessage && (
                <CustomToast
                    message={toastMessage}
                    preset={toastType}
                    title={toastTitle}
                    onClose={closeToast}
                />
            )}
        </ToastContext.Provider>
    );
};
