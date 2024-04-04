import { memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComp.module.scss';

interface ArticleImageBlockCompProps {
    className?: string;
    block: ArticleImageBlock
}

export const ArticleImageBlockComp = memo(({ className, block }: ArticleImageBlockCompProps) => (
    <div className={cn(cls.ArticleImageBlockComp, {}, [className])}>
        <img src={block.src} className={cls.img} alt={block.title} />
        {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
));
