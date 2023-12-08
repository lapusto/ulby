import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

interface DynamicMuduleLoaderProps {
    name: StateSchemaKey;
    reducer: Reducer;
    removeAfterUnmount?: boolean
}

export const DynamicMuduleLoader: FC<DynamicMuduleLoaderProps> = ({
    children, removeAfterUnmount, name, reducer,
}) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();
    useEffect(() => {
        store.reducerManager.add(name, reducer);
        dispatch({ type: 'init' });
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
