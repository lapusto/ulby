import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComp.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockCompProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComp = memo(({ className, block }: ArticleTextBlockCompProps) => {
    const { t } = useTranslation();
    return (
        <div className={cn(cls.ArticleTextBlockComp, {}, [className])}>
            {
                block.title && (
                    <Text title={block.title} className={cls.title} />
                )
            }
            {
                block.paragraphs.map((p, i) => (
                    <Text key={`paragraph-${i.toString()}`} text={p} className={cls.paragraph} />
                ))
            }
        </div>
    );
});
