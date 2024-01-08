import { profileReducer } from 'entities/Profile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { DynamicMuduleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicMuduleLoader';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <DynamicMuduleLoader removeAfterUnmount name="profile" reducers={reducers}>
            <div className={cn('', {}, [className])}>
                {t('PROFILE PAGE')}
            </div>
        </DynamicMuduleLoader>

    );
};

export default ProfilePage;
