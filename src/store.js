import {configureStore} from '@reduxjs/toolkit';
import { puppyBowlApi } from './API';

export const store = configureStore({
    reducer:{
        [puppyBowlApi.reducerPath]: puppyBowlApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});

