import { FC, InputHTMLAttributes, memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import type React from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string | number) => void;
    autoFocus?: boolean;
    readOnly?: boolean
}

export const Input: FC<InputProps> = memo(({
    className, value, onChange, type = 'text', placeholder, autoFocus, readOnly, ...props
}: InputProps) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={cn(cls.InputWrapper, { [cls.readOnly]: readOnly }, [className])}>
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
                readOnly={readOnly}
                {...props}

            />
        </div>
    );
});
