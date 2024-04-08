import { FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicMuduleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicMuduleLoader';
import { useSelector } from 'react-redux';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    if (!id) {
        return (
            <div className={cn(cls.ArticleDetailsPage, {}, [className])}>
                Статья не найдена
            </div>
        );
    }
    return (
        <DynamicMuduleLoader reducers={reducers} removeAfterUnmount>
            <div className={cn(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text title="Комментарии" className={cls.commentTitle} />
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </div>
        </DynamicMuduleLoader>
    );
};

export default ArticleDetailsPage;
