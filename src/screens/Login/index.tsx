import { useCallback } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button, FormTextInput, Screen, Text } from '@/components';
import { useAuthContext } from '@/contexts/Auth/AuthContext';
import { LoginSchema } from '@/utils/validations/loginSchema';
import { loginSchema } from '@/utils/validations/loginSchema';


export default function Login() {
    const { control, handleSubmit, formState } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const { signIn, isLoading } = useAuthContext();

    const onLogin = useCallback((data: LoginSchema) => {
        signIn(data.username, data.password);
    }, [signIn]);

    return (
        <Screen isLoading={isLoading}>
            <Text preset="titleLg" marginTop="s32">
                Login
            </Text>
            <Text preset="bodyMd" marginTop="s8">
                Enter your username and password
            </Text>

            <FormTextInput
                label="Username"
                control={control}
                name="username"
                icon="accountCircle"
                boxProps={{ marginTop: 's32' }}
            />

            <FormTextInput
                label="Password"
                control={control}
                secureTextEntry
                name="password"
                icon="lock"
                boxProps={{ marginTop: 's32' }}
            />

            <Button
                title="Login"
                onPress={handleSubmit(onLogin)}
                marginTop="s32"
                disabled={!formState.isValid}
                loading={formState.isSubmitting}
            />
        </Screen>
    );
}
