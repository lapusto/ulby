import { FC } from 'react'
import { classNames as cn } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation()
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : "ru")
    }

    return (
        <Button variant={ButtonVariant.CLEAR}
            onClick={toggle}
            className={cn(cls.LangSwitcher, {}, [className])}>
            {t("lang")}
        </Button>
    )
}