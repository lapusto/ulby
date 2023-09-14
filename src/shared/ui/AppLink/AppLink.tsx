import { FC } from 'react'
import { classNames as cn } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom';

interface AppLinkProps extends LinkProps {
    className?: string;
}


export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({ className, theme = AppLinkTheme.PRIMARY, children, to, ...props }) => {
    return (
        <Link className={cn(cls.AppLink, {}, [className, cls[theme]])} to={to} {...props}>
            {children}
        </Link>
    )
}