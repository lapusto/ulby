import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicMuduleLoaderProps {
    name?: StateSchemaKey;
    reducers: ReducerList;
    removeAfterUnmount?: boolean
}

export const DynamicMuduleLoader: FC<DynamicMuduleLoaderProps> = ({
    children, removeAfterUnmount, name, reducers,
}) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();
    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            const mounted = mountedReducers[name as StateSchemaKey];
            if (!mounted) {
                store.reducerManager.add(name, reducer);
                dispatch({ type: 'init' });
            }
        });
        return () => {
            if (removeAfterUnmount) {
                store.reducerManager.remove(name);
                dispatch({ type: 'destroy' });
            }
        };
        // eslint-disable-next-line
    }, []);
    return (
        // eslint-disable-next-line
        <>
            {children}
        </>
    );
};
