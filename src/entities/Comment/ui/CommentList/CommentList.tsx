import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from 'entities/Comment/model/types/comment';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = ({ className, isLoading, comments }) => {
    const { t } = useTranslation();
    return (
        <div className={cn(cls.CommentList, {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard comment={comment} className={cls.comment} isLoading={isLoading} key={comment.id} />
                    ))
                    : <Text text="Комментарии отсутствуют" />
            }
        </div>
    );
};
