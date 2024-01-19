import { ValidateProfileError, Profile } from '../../types/profile';

export const validateProfileData = (profile: Profile) => {
    const {
        first, lastname, age, country,
    } = profile;
    const errors: ValidateProfileError[] = [];

    if (!profile) {
        errors.push(ValidateProfileError.NO_DATA);
    }

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!age) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }
    return errors;
};
