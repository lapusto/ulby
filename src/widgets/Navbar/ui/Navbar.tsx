import { FC, useCallback, useState } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={cn(cls.Navbar, {}, [className])}>
            <Button
                variant={ButtonVariant.CLEAR_INVERTED}
                className={cn(cls.links)}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum d sit amet consectetur, adipisicing elit. Itaque, nam. Lorem ipsum dolor
            </Modal>
        </div>
    );
};
