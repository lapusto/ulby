import { FC, InputHTMLAttributes, memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import type React from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo(({
    className, value, onChange, type = 'text', placeholder, ...props
}: InputProps) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div className={cn(cls.InputWrapper, {}, [className])}>
            {
                placeholder
                && (
                    <div className={cls.placeholder}>
                        {placeholder}
                    </div>
                )
            }
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                {...props}

            />
        </div>
    );
});
