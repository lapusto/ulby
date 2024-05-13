import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SaveScrollSchema } from '../types/saveScrollSchema';

const initialState: SaveScrollSchema = {
    scroll: {},
};

export const saveScrollSlice = createSlice({
    name: 'saveScroll',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

export const { actions: saveScrollActions } = saveScrollSlice;
export const { reducer: saveScrollReducer } = saveScrollSlice;
