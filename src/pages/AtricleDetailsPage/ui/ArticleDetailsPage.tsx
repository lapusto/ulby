import { FC, useCallback, useEffect } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicMuduleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicMuduleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { AddCommentForm } from 'features/addCommentForm';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';

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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!id) {
        return (
            <Page className={cn(cls.ArticleDetailsPage, {}, [className])}>
                Статья не найдена
            </Page>
        );
    }
    return (
        <DynamicMuduleLoader reducers={reducers} removeAfterUnmount>
            <Page className={cn(cls.ArticleDetailsPage, {}, [className])}>
                <Button
                    variant={ButtonVariant.OUTLINE}
                    onClick={onBackToList}
                >
                    Назад к списку
                </Button>
                <ArticleDetails id={id} />
                <Text title="Комментарии" className={cls.commentTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </Page>
        </DynamicMuduleLoader>
    );
};

export default ArticleDetailsPage;
