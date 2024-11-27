import React, { useCallback, useEffect, useMemo } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button, FormTextInput, Modal } from '@/components';
import { Box } from '@/components';
import { useOfflineContext } from '@/contexts/Offiline/OfflineContext';
import { IDBTask } from '@/services/Todo/dbTodo';
import { FormTodoSchema, formTodoSchema } from '@/utils/validations/formTodoSchema';

interface TodoFormProps {
    todo?: IDBTask
    isOpen: boolean
    onClose: () => void
}

export const TodoForm = React.memo(({ todo, isOpen, onClose }: TodoFormProps) => {
    const { control, handleSubmit, formState, reset, setValue } = useForm<FormTodoSchema>({
        resolver: zodResolver(formTodoSchema),
        defaultValues: useMemo(() => ({
            name: '',
            description: '',
        }), []),
    });
    const { addTask, editTask } = useOfflineContext();

    const onSave = useCallback((data: FormTodoSchema) => {
        if (todo) {
            editTask({ ...todo, ...data });
        } else {
            addTask({ ...data, id: new Date().getTime().toString(), done: false });
        }

        onClose();
    }, [todo, addTask, editTask, onClose]);

    const setInitialValues = useCallback(() => {
        if (todo) {
            setValue('name', todo.name);
            setValue('description', todo.description);
        }
    }, [todo, setValue]);

    useEffect(() => {
        setInitialValues();

        if (!isOpen) {
            reset();
        }
    }, [todo, isOpen, reset, setInitialValues]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={todo ? 'Edit Todo' : 'New Todo'}
            visibleHeader
        >
            <Box gap="s16" flex={1}>
                <FormTextInput
                    label="Title"
                    control={control}
                    name="name"
                />

                <FormTextInput
                    label="Description"
                    control={control}
                    name="description"
                />

                <Button
                    title="Save"
                    onPress={handleSubmit(onSave)}
                    disabled={!formState.isValid}
                    loading={formState.isSubmitting}
                />
            </Box>
        </Modal>
    );
});
