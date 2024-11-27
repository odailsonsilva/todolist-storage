import { IconNames } from '@/components';
import { AppTabBottomTabParamListApp } from '@/components/molecules/TabBarCustom';

export const mapScreenToPropsApp: Record<
    keyof AppTabBottomTabParamListApp,
    {
        label: string;
        icon: {
            focused: IconNames;
            unfocused: IconNames;
        };
    }
> = {
    Sync: {
        label: 'Sync Data',
        icon: {
            focused: 'backup',
            unfocused: 'backup',
        },
    },
    Home: {
        label: 'Home',
        icon: {
            focused: 'envio',
            unfocused: 'envio',
        },
    },
    Settings: {
        label: 'Settings',
        icon: {
            focused: 'config',
            unfocused: 'config',
        },
    },

};

