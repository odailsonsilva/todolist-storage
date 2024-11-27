import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { TextInput as CustomTextInput } from '../TextInput/TextInput';
import { Box, BoxProps, TouchableOpacityBox } from '../Box/Box';
import { Modal } from '../../molecules/Modal/Modal';
import { Radio } from '../Radio/Radio';

interface Item {
  label: string;
  value: any;
  icon?: any;
  parent?: any;
  hidden?: boolean;
  untouchable?: boolean;
  disabled?: boolean;
  viewStyle?: any;
  textStyle?: any;
}

export interface DropDownPickerProps {
  options: Item[];
  label: string
  placeholder?: string;
  dropDownMaxHeight?: number;
  style?: any;
  dropDownStyle?: any;
  containerStyle?: any;
  itemStyle?: any;
  labelStyle?: any;
  selectedLabelStyle?: any;
  placeholderStyle?: any;
  activeItemStyle?: any;
  activeLabelStyle?: any;
  arrowStyle?: any;
  arrowColor?: string;
  showArrow?: boolean;
  arrowSize?: number;
  customArrowUp?: (size: number, color: string) => React.ReactNode;
  customArrowDown?: (size: number, color: string) => React.ReactNode;
  customTickIcon?: () => React.ReactNode;
  zIndex?: number;
  disabled?: boolean;
  searchable?: boolean;
  searchablePlaceholder?: string;
  searchableError?: (globalTextStyle: any) => React.ReactNode;
  searchableStyle?: any;
  searchablePlaceholderTextColor?: string;
  onSearch?: () => void;
  isVisible?: boolean;
  autoScrollToDefaultValue?: boolean;
  multiple?: boolean;
  multipleText?: string;
  min?: number;
  max?: number;
  selectedLabelLength?: number;
  labelLength?: number;
  labelProps?: any;
  scrollViewProps?: any;
  searchTextInputProps?: any;
  boxProps?: BoxProps;
  globalTextStyle?: any;
  childrenContainerStyle?: any;
  renderSeperator?: () => void;
  controller?: () => void;
  valueController?: any
  onOpen?: () => void;
  onClose?: () => void;
  onChangeItem?: (item: Item | null, index?: number) => void;
  onChangeList?: (items: Item[], callback: () => void) => void;
}

const DropDownPicker: React.FC<DropDownPickerProps> = ({
  options,
  label,
  containerStyle = {},
  itemStyle = {},
  labelStyle = {},
  activeItemStyle = {},
  activeLabelStyle = {},
  zIndex = 5000,
  labelLength = 100,
  labelProps = {},
  boxProps = {},
  onOpen = () => { },
  onClose = () => { },
  valueController,
  onChangeItem,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<null | Item>(null);
  const [, setSearchableValue] = useState('');
  const [searchableItems, setSearchableItems] = useState(options);
  const [, setLoading] = useState(false);
  const [, setShowTick] = useState(false);

  const selectedItemRef = useRef<null | any>(null);

  useEffect(() => {
    setValue(valueController);
  }, [valueController]);

  // Handle the dropdown visibility
  const toggleOpen = () => {
    if (open) {
      close();
    } else {
      openDropdown();
    }
  };

  const openDropdown = () => {
    setOpen(true);
    setSearchableItems(options);
    onOpen();
    setLoading(true);
  };

  const close = () => {
    setOpen(false);
    setSearchableValue('');
    setSearchableItems(options);
    onClose();
    setLoading(false);
  };

  // Handle item selection
  const handleSelectItem = (item: Item, index: number) => {
    handleSingleSelect(item, index);
  };

  const handleSingleSelect = (item: Item | null, index: number) => {
    setValue(item);
    setShowTick(true);
    onChangeItem?.(item, index);
    close();
  };

  return (
    <Box
      style={[
        styles.container,
        containerStyle,
        open ? { zIndex } : {},
      ]}
      {...boxProps}
    >
      <CustomTextInput
        onPress={toggleOpen}
        value={value?.label}
        label={label}
        onResetContext={() => handleSingleSelect(null, 0)}
        iconRight={open ? 'arrowUp' : 'arrowDown'}
        isInputForSelect={true}
      />

      <Modal
        isOpen={open}
        title={label}
        onClose={() => setOpen(false)}
        visibleHeader
        visabledButtons
        gestureEnabled={false}
        confirm="Selecionar"
        onConfirmation={() => {
          if (selectedItemRef) {
            // console.log('Item selecionado:', selectedItemRef.current);
          }
        }}
        cancel="Cancelar"
        maxHeight={0.4}
      >
        {searchableItems?.map((item, index) => (
          <TouchableOpacityBox
            key={`${item.value}-${index}`}
            style={[
              styles.item,
              itemStyle,
              value && item.value === value.value ? [styles.activeItem, activeItemStyle] : {},
              item.disabled ? styles.disabled : {},
              item.viewStyle || {},
            ]}
            onPress={() => handleSelectItem(item, index)}
            disabled={item.disabled}
            mt={'s4'}
          >
            <Radio
              selectedValue={value?.value}
              value={item.value}
            />
            <Text
              style={[
                styles.label,
                labelStyle,
                value && item.value === value.value ? [styles.activeLabel, activeLabelStyle] : {},
                item.viewStyle || {},
              ]}
              numberOfLines={1}
              {...labelProps}
            >
              {item.label.length > labelLength
                ? `${item.label.substring(0, labelLength)}...`
                : item.label}
            </Text>
          </TouchableOpacityBox>
        ))}
      </Modal>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 5000,
  },
  dropDown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
    minHeight: 40,
  },
  selectedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  label: {
    flex: 1,
    marginRight: 10,
  },
  placeholder: {
    color: '#aaa',
    flex: 1,
  },
  arrow: {
    marginLeft: 10,
  },
  disabled: {
    opacity: 0.5,
  },
  open: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  dropDownContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    maxHeight: 150,
    overflow: 'hidden',
    elevation: 1,
    zIndex: 9999,
  },
  searchTextInput: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderColor: '#999',
    borderBottomWidth: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    height: 40,
  },
  activeItem: {
    backgroundColor: '#f9f9f9',
  },
  activeLabel: {
    fontWeight: 'bold',
  },
});

export default DropDownPicker;
