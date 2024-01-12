import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextStyle {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    style?: TextStyle;
    align?: TextAlign
}

export const Text: FC<TextProps> = (
    {
        className, text, title, style = TextStyle.PRIMARY, align = TextAlign.LEFT,
    },
) => {
    const { t } = useTranslation();
    return (
        <div className={cn(cls.Text, { [cls[style]]: style, [cls[align]]: align }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
