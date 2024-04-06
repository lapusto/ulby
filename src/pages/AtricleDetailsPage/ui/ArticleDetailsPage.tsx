import { FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
    const { id } = useParams<{ id: string }>();
    if (!id) {
        return (
            <div className={cn(cls.ArticleDetailsPage, {}, [className])}>
                Статья не найдена
            </div>
        );
    }
    return (
        <div className={cn(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text title="Комментарии" className={cls.commentTitle} />
            <CommentList
                comments={[]}
                isLoading
            />
        </div>
    );
};

export default ArticleDetailsPage;
