import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComp.module.scss';

interface ArticleTextBlockCompProps {
    className?: string;
}

export const ArticleTextBlockComp: FC<ArticleTextBlockCompProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={cn(cls.ArticleTextBlockComp, {}, [className])}>
            text block
        </div>
    );
};
