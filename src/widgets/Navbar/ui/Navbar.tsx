import { FC } from 'react'
import { classNames as cn } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={cn(cls.Navbar, {}, [className])}>
            <div className={cn(cls.links)}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={cn(cls.main)}>Main</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>About</AppLink>
            </div>
        </div>
    )
}