import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { Profile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, string, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (profileId, { extra, rejectWithValue, getState }) => {
        const formData = getProfileForm(getState());
        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }
        try {
            const response = await extra.api.put<Profile>(
                `/profile/${profileId}`,
                formData,
            );
            return response.data;
        } catch (e) {
            return rejectWithValue(i18n.t('Wrong login or password'));
        }
    },
);
