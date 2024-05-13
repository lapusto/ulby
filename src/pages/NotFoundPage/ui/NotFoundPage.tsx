import { FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <Page className={cn(cls.NotFoundPage, {}, [className])}>
            {t('notFound')}
        </Page>
    );
};
