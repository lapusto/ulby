import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUserName';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const RootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: RootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
