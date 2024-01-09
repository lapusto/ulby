import { fetchProfileData, profileReducer } from 'entities/Profile';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { DynamicMuduleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicMuduleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicMuduleLoader removeAfterUnmount name="profile" reducers={reducers}>
            <div className={cn('', {}, [className])}>
                {t('PROFILE PAGE')}
            </div>
        </DynamicMuduleLoader>

    );
};

export default ProfilePage;
