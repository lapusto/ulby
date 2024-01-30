import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComp.module.scss';

interface ArticleCodeBlockCompProps {
    className?: string;
}

export const ArticleCodeBlockComp: FC<ArticleCodeBlockCompProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={cn(cls.ArticleCodeBlockComp, {}, [className])}>
            code block comp
        </div>
    );
};
