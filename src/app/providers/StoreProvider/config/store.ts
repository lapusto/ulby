import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export function createReduxStore() {
    return configureStore<StateSchema>({
        reducer: {},
        devTools: __IS_DEV__,
    });
}
