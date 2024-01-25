import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={cn(cls.ArticlesPage, {}, [className])}>
            articles page
        </div>
    );
};

export default memo(ArticlesPage);
