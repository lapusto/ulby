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
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(profileActions.updateProfile({}));
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
                        <>
                            <Button
                                className={cls.editBtn}
                                variant={ButtonVariant.OUTLINE_RED}
                                onClick={onCancelEdit}
                            >
                                {t('cancel')}
                            </Button>
                            <Button
                                className={cls.saveBtn}
                                variant={ButtonVariant.OUTLINE}
                                onClick={onSave}
                            >
                                {t('save')}
                            </Button>
                        </>
                    )

            }
        </div>
    );
};
