/* eslint-disable no-restricted-globals */
import { FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={cn(cls.ErrorPage, {}, [className])}>
            <p>{t('errorText')}</p>
            <Button onClick={reloadPage}>{t('refresh')}</Button>
        </div>
    );
};
