import { FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={cn(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
