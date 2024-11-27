import { useForm } from 'react-hook-form';

import { Button, FormTextInput, Modal } from '@/components';
import { Box } from '@/components';

interface TodoFormProps {
    todo?: any
    isOpen: boolean
    onClose: () => void
}

export const TodoForm = ({ todo, isOpen, onClose }: TodoFormProps) => {
    const { control, handleSubmit } = useForm();

    const onSave = (data: any) => {
        console.log(data);
    };

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
                    name="title"
                />

                <FormTextInput
                    label="Description"
                    control={control}
                    name="description"
                />

                <Button
                    title="Save"
                    onPress={handleSubmit(onSave)}
                />
            </Box>
        </Modal>
    );
};
