import { FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './AtricleList.module.scss';

interface AtricleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const AtricleList: FC<AtricleListProps> = ({
    className, articles, view = ArticleView.SMALL, isLoading,
}) => {
    const renderArticle = (article: Article) => <ArticleListItem article={article} view={view} />;
    return (
        <div className={cn(cls.AtricleList, {}, [className])}>
            {
                articles.length
                    ? articles.map(renderArticle)
                    : null
            }
        </div>
    );
};
