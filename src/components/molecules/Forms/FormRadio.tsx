import { Radio, RadioButtonProps } from '../../atoms/Radio/Radio';
import React from 'react';

import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';


export function FormRadio<FormType extends FieldValues>({
    control,
    name,
    rules,
    value,
    label,
    ...radioProps
}: RadioButtonProps & UseControllerProps<FormType>) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field }) => (
                <Radio
                    value={value}
                    selectedValue={field.value}
                    onSelect={(e: any) => {
                        field.onChange(e);
                    }}
                    label={label}
                    {...radioProps}
                />

            )}
        />
    );
}
