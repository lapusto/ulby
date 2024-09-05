import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { DynamicMuduleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicMuduleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ArticlesViewSelector } from 'features/selectArticlesView/ArticlesViewSelector';
import { Page } from 'widgets/Page/Page';
import cls from './ArticlesPage.module.scss';
import { articlesPageReducer, getArticles } from '../model/slices/articlePageSlice';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    getArticlesPageLoading,
    getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { initArticlesPage } from '../model/services/initArticlesPage.tsx/initArticlesPage';
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);

    const isLoading = useSelector(getArticlesPageLoading);
    const articlesView = useSelector(getArticlesPageView);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useEffect(() => {
        dispatch(initArticlesPage());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <DynamicMuduleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={cn(cls.ArticlesPage, {}, [className])}>
                <ArticlesPageFilters />
                <ArticleList className={cls.list} view={articlesView} articles={articles} isLoading={isLoading} />
            </Page>
        </DynamicMuduleLoader>
    );
};

export default memo(ArticlesPage);
