import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { TextStyle, Text } from 'shared/ui/Text/Text';
import { getLoginUsername } from 'features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 'features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from 'features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from 'features/AuthByUserName/model/selectors/getLoginError/getLoginError';
import { DynamicMuduleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicMuduleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername';

interface LoginFormProps {
    className?: string;
    onSuccess: () => void
}
const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
        dispatch(loginByUsername({ username, password }));
    }, [onSuccess, dispatch, username, password]);

    return (
        <DynamicMuduleLoader name="loginForm" reducers={initialReducers} removeAfterUnmount>
            <div className={cn(cls.LoginForm, {}, [className])}>
                <Text title={t('auth form')} />
                {error && <Text style={TextStyle.ERROR} text={error} />}
                <Input
                    placeholder={t('login')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    placeholder={t('password')}
                    className={cls.input}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    variant={ButtonVariant.OUTLINE}
                    onClick={onLoginClick}
                    className={cls.loginBtn}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicMuduleLoader>

    );
});

export default LoginForm;
