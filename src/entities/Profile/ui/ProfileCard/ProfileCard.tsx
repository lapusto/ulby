import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, classNames as cn } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextStyle } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'shared/const/common';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readOnly?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeAge?: (value?: number) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
    className,
    data,
    isLoading,
    error,
    readOnly,
    onChangeFirstname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeLastname,
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
                {
                    data.avatar && (
                        <div className={cls.avatarWrapper}>
                            <Avatar src={data?.avatar} />
                        </div>
                    )
                }
                <Input
                    value={data?.first}
                    placeholder={t('firstname')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('lastname')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('city')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('avatar')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readOnly={readOnly}
                />
                <Select
                    label="Укажите валюту"
                    options={[
                        { value: Currency.BYN, content: Currency.BYN },
                        { value: Currency.USD, content: Currency.USD },
                        { value: Currency.EUR, content: Currency.EUR },
                    ]}
                />

            </div>
        </div>
    );
};
