import { ButtonHTMLAttributes, FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonVariant {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant
}

export const Button: FC<ButtonProps> = ({
    className, children, variant, ...props
}) => (
    <button
        type="button"
        className={cn(cls.Button, {}, [className, cls[variant]])}
        {...props}
    >
        {children}
    </button>
);
