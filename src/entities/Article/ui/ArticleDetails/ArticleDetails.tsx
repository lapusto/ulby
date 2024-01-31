import { FC, useEffect } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { DynamicMuduleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicMuduleLoader';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextStyle } from 'shared/ui/Text/Text';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = ({ className, id }) => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div>
                Loading...
            </div>
        );
    } else if (error) {
        content = (
            <div>
                <Text align={TextAlign.CENTER} title="Ошибка при загрузке статьи" style={TextStyle.ERROR} />
            </div>
        );
    } else {
        content = (
            <div>
                article details!
            </div>
        );
    }

    return (
        <DynamicMuduleLoader reducers={reducers} removeAfterUnmount>
            <div className={cn(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicMuduleLoader>
    );
};
