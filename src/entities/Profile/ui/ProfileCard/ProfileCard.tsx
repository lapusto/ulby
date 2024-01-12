import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, classNames as cn } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextStyle } from 'shared/ui/Text/Text';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({
    className, data, isLoading, error,
}) => {
    const { t } = useTranslation('profile');
    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true })}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [cls.error])}>
                <Text
                    align={TextAlign.CENTER}
                    style={TextStyle.ERROR}
                    title={t('profile error')}
                    text={t('try to restart')}
                />
            </div>
        );
    }

    return (
        <div className={cn(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('firstname')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('lastname')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
