import { ToastPreset } from '@/components';

export interface IToastContext {
    showToast({ message, title, type, duration }: ShowToastProps): void
}

export interface ShowToastProps {
    type: ToastPreset
    message: string
    title: string
    duration?: number
}
