import { FC } from 'react'
import { classNames as cn } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ButtonVariant } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button variant={ButtonVariant.CLEAR} onClick={toggleTheme}
            className={cn(cls.ThemeSwitcher, {}, [className])}>
            {
                theme === Theme.DARK ? <DarkIcon /> : <LightIcon />
            }
        </Button>
    )
}