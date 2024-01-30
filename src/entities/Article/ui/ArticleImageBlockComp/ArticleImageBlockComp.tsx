import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComp.module.scss';

interface ArticleImageBlockCompProps {
    className?: string;
}

export const ArticleImageBlockComp: FC<ArticleImageBlockCompProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={cn(cls.ArticleImageBlockComp, {}, [className])}>
            image
        </div>
    );
};
