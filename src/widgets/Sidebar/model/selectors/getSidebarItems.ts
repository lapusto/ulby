import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import AboutIcon from 'shared/assets/icons/list.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Main Page',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'About Page',
            },
        ];
        if (userData) {
            SidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Profile Page',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticleIcon,
                    text: 'Articles',
                    authOnly: true,
                },
            );
        }
        return SidebarItemsList;
    },
);
