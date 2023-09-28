import { ButtonHTMLAttributes, FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonVariant {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean
}

export const Button: FC<ButtonProps> = ({
    className, children, variant, square, ...props
}) => (
    <button
        type="button"
        className={cn(cls.Button, { [cls.square]: square }, [className, cls[variant]])}
        {...props}
    >
        {children}
    </button>
);
