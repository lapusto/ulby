import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={cn('', {}, [className])}>
            {t('PROFILE PAGE')}
        </div>
    );
};

export default ProfilePage;
