import { RadioButton, RadioProps } from '../../atoms/RadioButton/Radio';
import React from 'react';

import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';


export function FormRadioButtton<FormType extends FieldValues>({
    control,
    name,
    rules,
    value,
    label,
    ...radioProps
}: RadioProps & UseControllerProps<FormType>) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field }) => (
                <RadioButton
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
