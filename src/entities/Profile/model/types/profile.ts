import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT USER DATA',
    INCORRECT_AGE = 'INCORRECT AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO PROFILE DATA'
}

export interface Profile {
    id?: string;
    first?: string
    lastname?: string
    age?: number,
    currency?: Currency,
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}
