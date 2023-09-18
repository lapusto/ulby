import { FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
    <div className={cn(cls.Navbar, {}, [className])}>
        <div className={cn(cls.links)}>
            <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cn(cls.main)}>Main</AppLink>
            <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>About</AppLink>
        </div>
    </div>
);
