import React from 'react';
import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';

import {
  DropDownPickerProps,
  default as Select,
} from '../../atoms/Select/Select';

export function FormComboBox<FormType extends FieldValues>({
  control,
  name,
  rules,
  options: optionsParams,
  onChangeItem,
  ...comboboxProps
}: DropDownPickerProps & UseControllerProps<FormType>) {

  const options = React.useMemo(() => {
    const uniqueOptions: any = {};
    const uniqueOptionsArray: any[] = [];

    optionsParams.forEach((item) => {
      const value: any = String(item.value);
      const label: any = item.label;

      if (!uniqueOptions[value]) {
        uniqueOptions[value] = true;
        uniqueOptionsArray.push({ value, label });
      }
    });

    return uniqueOptionsArray;
  }, [optionsParams]);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => {
        return (
          <Select
            valueController={options.find((item) => item.value === field.value)}
            onChangeItem={(item) => {
              field.onChange(item?.value);
              if (onChangeItem) {
                onChangeItem(item);
              }
            }}
            options={options}
            {...comboboxProps}
          />
        );
      }}
    />
  );
}
