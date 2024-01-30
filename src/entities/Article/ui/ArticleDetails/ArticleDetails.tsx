import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
}

export const ArticleDetails: FC<ArticleDetailsProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={cn(cls.ArticleDetails, {}, [className])}>
            article details!
        </div>
    );
};
