import React from 'react';
import { ThemeColors } from '@/theme';
import { useAppTheme } from '../../../hooks/useAppTheme';
import { Info } from '@/assets/icons/Info';
import { Cancel } from '@/assets/icons/Cancel';
import { Lock } from '@/assets/icons/Lock';
import { AccountCircle } from '@/assets/icons/AccountCircle';
import { ArrowUp } from '@/assets/icons/arrowUp';
import { ArrowDown } from '@/assets/icons/arrowDown';
import { Warning } from '@/assets/icons/Warning';
import { CheckCircle } from '@/assets/icons/CheckCircle';
import { Close } from '@/assets/icons/Close';
import { Carga } from '@/assets/icons/Carga';
import { Backup } from '@/assets/icons/Backup';
import { Config } from '@/assets/icons/Config';
import { Envio } from '@/assets/icons/Envio';
import { Leitura } from '@/assets/icons/Leitura';
import { Upload } from '@/assets/icons/Upload';
import { Delete } from '@/assets/icons/Delete';
import { ArrowBack } from '@/assets/icons/ArrowBack';
import { ArrowRightAlt } from '@/assets/icons/ArrowrRightAlt';
import { AddCircle } from '@/assets/icons/addCircle';
import { ChangeCircle } from '@/assets/icons/ChangeCircle';
import { Feed } from '@/assets/icons/Feed';
import { MoreVertical } from '@/assets/icons/MoreVertical';
import { RotateRight } from '@/assets/icons/RotateRight';
import { Logout } from '@/assets/icons/Logout';
import { ManageSearch } from '@/assets/icons/ManageSearch';
import { ArrowRight } from '@/assets/icons/arrowRight';
import { LocationOn } from '@/assets/icons/LocationOn';
import { Search } from '@/assets/icons/Search';
import { ArrowForword } from '@/assets/icons/ArrowForward';
import { Monetization } from '@/assets/icons/Monetization';
import { ImagesMode } from '@/assets/icons/ImagesMode';
import { Add } from '@/assets/icons/Add';

export interface IconBase {
    size?: number
    color?: string
}
interface Props {
    name: IconNames
    color?: ThemeColors
    size?: number
}
export function Icon({ name, color = 'backgroundContrast', size = 20 }: Props) {
    const { colors } = useAppTheme();
    const SVGIcon = iconRegistry[name];
    return (
        <SVGIcon color={colors[color]} size={size} />
    );
}

const iconRegistry = {
    info: Info,
    cancel: Cancel,
    lock: Lock,
    accountCircle: AccountCircle,
    arrowUp: ArrowUp,
    arrowDown: ArrowDown,
    warning: Warning,
    checkCircle: CheckCircle,
    close: Close,
    carga: Carga,
    backup: Backup,
    config: Config,
    envio: Envio,
    leitura: Leitura,
    resumo: Leitura,
    detalhes: Leitura,
    fotos: Leitura,
    upload: Upload,
    delete: Delete,
    arrowBack: ArrowBack,
    arrowRightAlt: ArrowRightAlt,
    addCircle: AddCircle,
    changeCircle: ChangeCircle,
    feed: Feed,
    moreVertical: MoreVertical,
    rotateRight: RotateRight,
    logout: Logout,
    manageSearch: ManageSearch,
    arrowRight: ArrowRight,
    locationOn: LocationOn,
    search: Search,
    arrowForword: ArrowForword,
    monetization: Monetization,
    imagesMode: ImagesMode,
    add: Add,
};

type IconType = typeof iconRegistry
export type IconNames = keyof IconType
