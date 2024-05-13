import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { profileReducer } from 'entities/Profile';
import { $api } from 'shared/api/api';
import { articlesPageReducer } from 'pages/AtriclesPage/model/slices/articlePageSlice';
import { saveScrollReducer } from 'features/saveScroll';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
) {
    const RootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        profile: profileReducer,
        articlesPage: articlesPageReducer,
        scrollPosition: saveScrollReducer,
    };

    const reducerManager = createReducerManager(RootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }),
    });
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
