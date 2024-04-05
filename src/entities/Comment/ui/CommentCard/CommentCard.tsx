import { memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment/model/types/comment';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => (
    <div className={cn(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
            <Avatar size={30} src={comment.user.avatar || "https://www.svgrepo.com/show/452030/avatar-default.svg"} />
            <Text title={comment.user.username} className={cls.username} />
        </div>
        <Text text={comment.text} className={cls.text} />
    </div>
));
