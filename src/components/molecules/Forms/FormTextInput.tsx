import React from 'react';

import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';

import { TextInput, TextInputProps } from '../../atoms/TextInput/TextInput';


export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextInput
          value={field.value}
          onChangeText={(e: any) => {
            field.onChange(e);
          }}
          errorMessage={fieldState.error?.message}
          {...textInputProps}
        />
      )}
    />
  );
}
