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
            title: '',
        }), []),
    });
    const { addTask, editTask, deleteTask } = useOfflineContext();

    const onSave = useCallback((data: FormTodoSchema) => {
        if (todo) {
            editTask({ ...todo, title: data.title });
        } else {
            addTask({ ...data, completed: false, userId: 1, title: data.title });
        }

        onClose();
    }, [todo, addTask, editTask, onClose]);

    const setInitialValues = useCallback(() => {
        if (todo) {
            setValue('title', todo.title);
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
            maxHeight={400}
        >
            <Box gap="s16" flex={1} paddingVertical="s10" marginVertical="s20">
                <FormTextInput
                    label="Title"
                    control={control}
                    name="title"
                />

                <FormTextInput
                    label="Description"
                    control={control}
                    name="description"
                />


                <Box gap="s4">
                    {todo && (
                        <Button
                            title="Delete"
                            onPress={() => deleteTask(todo)}
                            preset="primaryOutline"
                        />
                    )}

                    <Button
                        title="Save"
                        onPress={handleSubmit(onSave)}
                        disabled={!formState.isValid}
                        loading={formState.isSubmitting}
                    />
                </Box>
            </Box>
        </Modal>
    );
});
