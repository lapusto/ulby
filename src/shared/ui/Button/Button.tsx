import { ButtonHTMLAttributes, FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonVariant {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = ({
    className, children, variant, square, size = ButtonSize.M, ...props
}) => (
    <button
        type="button"
        className={cn(cls.Button, { [cls.square]: square }, [className, cls[size], cls[variant]])}
        {...props}
    >
        {children}
    </button>
);
