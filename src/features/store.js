import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        categoties: 'cat',
    },
    devTools: true,
});