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
    Carga: {
        label: 'Carga',
        icon: {
            focused: 'carga',
            unfocused: 'carga',
        },
    },
    Leitura: {
        label: 'Leitura',
        icon: {
            focused: 'leitura',
            unfocused: 'leitura',
        },
    },
    Envio: {
        label: 'Envio',
        icon: {
            focused: 'envio',
            unfocused: 'envio',
        },
    },
    Configuracao: {
        label: 'Configurações',
        icon: {
            focused: 'config',
            unfocused: 'config',
        },
    },
    // TODO REMOVER
    // Sync: {
    //   label: 'Sync',
    //   icon: {
    //     focused: 'config',
    //     unfocused: 'config',
    //   },
    // },
};

