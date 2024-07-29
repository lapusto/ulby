import { FC, useCallback } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { articlesPageActions } from 'pages/AtriclesPage/model/slices/articlePageSlice';
import { ArticleView } from 'entities/Article';
import { useSelector } from 'react-redux';
import { getArticlesPageView } from 'pages/AtriclesPage/model/selectors/articlesPageSelectors';
import { Select } from 'shared/ui/Select/Select';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = ({ className }) => {
    const dispatch = useAppDispatch();
    const articlesView = useSelector(getArticlesPageView);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return (
        <div className={cn(cls.ArticlesPageFilters, {}, [className])}>
            <div>
                <Select label="сортировать по" />
            </div>
        </div>
    );
};
