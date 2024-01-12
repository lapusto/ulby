import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileReadOnly } from 'entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { profileActions } from 'entities/Profile';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(true));
    }, [dispatch]);

    return (
        <div className={cn(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('profile')} />
            {
                readonly
                    ? (
                        <Button
                            className={cls.editBtn}
                            variant={ButtonVariant.OUTLINE}
                            onClick={onEdit}
                        >
                            {t('edit')}
                        </Button>
                    )
                    : (
                        <Button
                            className={cls.editBtn}
                            variant={ButtonVariant.OUTLINE}
                            onClick={onCancelEdit}
                        >
                            {t('cancel')}
                        </Button>
                    )

            }
        </div>
    );
};
