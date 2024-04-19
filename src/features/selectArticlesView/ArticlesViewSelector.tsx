import { FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entities/Article';
import ListIcon from 'shared/assets/icons/bi_list.svg';
import TiledIcon from 'shared/assets/icons/fe_tiled.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import cls from './ArticlesViewSelector.module.scss';

interface ArticlesViewSelectorProps {
    className?: string;
    currentView: ArticleView;
    onViewClick?: (view: ArticleView) => void
}
const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
];

export const ArticlesViewSelector: FC<ArticlesViewSelectorProps> = ({ className, currentView, onViewClick }) => {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={cn(cls.ArticlesViewSelector, {}, [className])}>
            {
                viewTypes.map((v) => (
                    <Button
                        onClick={onClick(v.view)}
                        variant={ButtonVariant.CLEAR}
                        key={v.view}
                    >
                        <Icon Svg={v.icon} className={cn('', { [cls.notActive]: v.view !== currentView })} />
                    </Button>
                ))
            }
        </div>
    );
};
