import { FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
    className, theme = AppLinkTheme.PRIMARY, children, to, ...props
}) => (
    <Link
        className={cn(cls.AppLink, {}, [className, cls[theme]])}
        to={to}
        {...props}
    >
        {children}
    </Link>
);
