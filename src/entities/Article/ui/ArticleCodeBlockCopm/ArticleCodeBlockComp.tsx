import { memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import cls from './ArticleCodeBlockComp.module.scss';

interface ArticleCodeBlockCompProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComp = memo(({ className, block }: ArticleCodeBlockCompProps) => (
    <div className={cn(cls.ArticleCodeBlockComp, {}, [className])}>
        <Code text={block.code} />
    </div>
));
