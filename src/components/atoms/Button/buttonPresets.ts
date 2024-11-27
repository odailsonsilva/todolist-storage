import { ThemeColors } from '@/theme';
import { TouchableOpacityBoxProps } from '../Box/Box';

import { ButtonPreset } from './Button';

interface ButtonUI {
    container: TouchableOpacityBoxProps;
    content: ThemeColors;
}

export const buttonPresets: Record<
    ButtonPreset,
    {
        default: ButtonUI;
        disabled: ButtonUI;
    }
> = {
    primary: {
        default: {
            container: {
                backgroundColor: 'primary',
                borderRadius: 's40',
            },
            content: 'primaryContrast',
        },
        disabled: {
            container: {
                backgroundColor: 'neutral300',
                borderRadius: 's40',
            },
            content: 'neutral500',
        },
    },
    primaryOutline: {
        default: {
            container: {
                borderWidth: 1,
                borderColor: 'primary',
                borderRadius: 's40',
            },
            content: 'primary',
        },
        disabled: {
            container: {
                borderWidth: 1,
                borderColor: 'neutral300',
                borderRadius: 's40',
            },
            content: 'neutral400',
        },
    },
    primarySquare: {
        default: {
            container: {
                backgroundColor: 'primary500',
                borderRadius: 's4',
            },
            content: 'primaryContrast',
        },
        disabled: {
            container: {
                borderWidth: 1,
                borderColor: 'neutral300',
                borderRadius: 's4',
            },
            content: 'neutral400',
        },
    },
    primaryOutlineSquare: {
        default: {
            container: {
                borderWidth: 1,
                borderColor: 'primary700',
                borderRadius: 's4',
            },
            content: 'primary700',
        },
        disabled: {
            container: {
                borderWidth: 1,
                borderColor: 'neutral300',
                borderRadius: 's4',
            },
            content: 'neutral400',
        },
    },
    secondary: {
        default: {
            container: {
                backgroundColor: 'green500',
                borderRadius: 's40',
            },
            content: 'primaryContrast',
        },
        disabled: {
            container: {
                backgroundColor: 'neutral300',
                borderRadius: 's40',
            },
            content: 'neutral500',
        },
    },
    secondaryOutline: {
        default: {
            container: {
                borderWidth: 1,
                borderColor: 'green700',
                borderRadius: 's40',
            },
            content: 'green700',
        },
        disabled: {
            container: {
                borderWidth: 1,
                borderColor: 'neutral300',
                borderRadius: 's40',
            },
            content: 'neutral400',
        },
    },
    secondarySquare: {
        default: {
            container: {
                backgroundColor: 'green500',
                borderRadius: 's4',
            },
            content: 'primaryContrast',
        },
        disabled: {
            container: {
                borderWidth: 1,
                borderColor: 'neutral300',
                borderRadius: 's4',
            },
            content: 'neutral400',
        },
    },
    secondaryOutlineSquare: {
        default: {
            container: {
                borderWidth: 1,
                borderColor: 'green700',
                borderRadius: 's4',
            },
            content: 'green700',
        },
        disabled: {
            container: {
                borderWidth: 1,
                borderColor: 'neutral300',
                borderRadius: 's4',
            },
            content: 'neutral400',
        },
    },
    primaryWithoutBorder: {
        default: {
            container: {
                borderWidth: 0,
                borderRadius: 's4',
            },
            content: 'neutral600',
        },
        disabled: {
            container: {
                borderWidth: 1,
                borderColor: 'neutral300',
                borderRadius: 's4',
            },
            content: 'neutral400',
        },
    },
    outline: {
        default: {
            container: {
                borderWidth: 1,
                borderColor: 'neutral700',
                borderRadius: 's4',
            },
            content: 'neutral700',
        },
        disabled: {
            container: {
                borderWidth: 1,
                borderColor: 'neutral300',
                borderRadius: 's4',
            },
            content: 'neutral400',
        },
    },
    link: {
        default: {
            container: {
            },
            content: 'neutral700',
        },
        disabled: {
            container: {
            },
            content: 'neutral400',
        },
    },
    isIconButton: {
        default: {
            container: {
                backgroundColor: 'neutral100',
                borderRadius: 's16',
                width: 30,
                height: 30,
            },
            content: 'primary',
        },
        disabled: {
            container: {
                borderWidth: 1,
                borderColor: 'neutral300',
                borderRadius: 's4',
            },
            content: 'neutral400',
        },
    },
    tertiary: {
        default: {
            container: {
                backgroundColor: 'primary',
                borderRadius: 's4',
            },
            content: 'primaryContrast',
        },
        disabled: {
            container: {
                borderWidth: 1,
                borderColor: 'neutral300',
                borderRadius: 's4',
            },
            content: 'neutral400',
        },
    },
};
