import { FC, useEffect } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { DynamicMuduleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicMuduleLoader';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = ({ className }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchArticleById('1'));
    }, [dispatch]);

    return (
        <DynamicMuduleLoader reducers={reducers} removeAfterUnmount>
            <div className={cn(cls.ArticleDetails, {}, [className])}>
                article details!
            </div>
        </DynamicMuduleLoader>
    );
};
