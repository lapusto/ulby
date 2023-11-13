import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextStyle {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    style?: TextStyle;
}

export const Text: FC<TextProps> = (
    {
        className, text, title, style = TextStyle.PRIMARY,
    },
) => {
    const { t } = useTranslation();
    return (
        <div className={cn(cls.Text, { [cls[style]]: style }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
