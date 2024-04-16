import { FC, memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entities/Article';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => (
    <div className={cn(cls.ArticlesPage, {}, [className])}>
        <ArticleList view={ArticleView.SMALL} articles={[]} />
    </div>
);

export default memo(ArticlesPage);
