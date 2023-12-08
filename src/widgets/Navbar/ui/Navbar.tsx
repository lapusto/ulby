import { FC, useCallback, useState } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={cn(cls.Navbar, {}, [className])}>
                <Button
                    variant={ButtonVariant.CLEAR_INVERTED}
                    className={cn(cls.links)}
                    onClick={onLogout}
                >
                    {t('Logout')}
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </div>
        );
    }

    return (
        <div className={cn(cls.Navbar, {}, [className])}>
            <Button
                variant={ButtonVariant.CLEAR_INVERTED}
                className={cn(cls.links)}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {
                isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            }
        </div>
    );
};
