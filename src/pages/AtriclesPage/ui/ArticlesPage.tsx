import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Article, AtricleList } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => (
    <div className={cn(cls.ArticlesPage, {}, [className])}>
        <AtricleList articles={[]} />
    </div>
);

export default memo(ArticlesPage);
