import {
    Suspense, memo, useMemo, useState,
} from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../model/items';
import { SidebarItem } from './SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => setCollapsed((collapsed) => !collapsed);
    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <Suspense fallback="">
            <SidebarItem
                item={item}
                collapsed={collapsed}
                key={item.path}
            />
        </Suspense>
    )), [collapsed]);
    return (
        <div
            data-testid="sidebar"
            className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                square
                size={ButtonSize.L}
                onClick={onToggle}
                className={cls.collapsedBtn}
                variant={ButtonVariant.BACKGROUND_INVERTED}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {
                    itemsList
                }
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <Suspense fallback="">
                    <LangSwitcher className={cls.lang} />
                </Suspense>

            </div>
        </div>
    );
});
