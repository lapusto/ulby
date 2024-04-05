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
            <CommentList comments={[
                {
                    id: '1',
                    text: 'Отличная статья',
                    user: {
                        id: '1',
                        username: 'User',
                        avatar: 'https://static.sobaka.ru/images/image/00/80/54/85/_normal.jpg?v=1485945088',
                    },
                },
                {
                    id: '2',
                    text: 'Спасибо за информацию',
                    user: { id: '2', username: 'User 2' },
                },
            ]}
            />
        </div>
    );
};

export default ArticleDetailsPage;
