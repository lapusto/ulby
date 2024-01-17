import { CSSProperties, FC, useMemo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
}

export const Avatar: FC<AvatarProps> = ({ className, src, size }) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return <img src={src} style={styles} alt="avatar" className={cn(cls.Avatar, {}, [className])} />;
};
