import { FC, useState } from 'react'
import { classNames as cn } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {

    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => setCollapsed(collapsed => !collapsed)
    return (
        <div className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}