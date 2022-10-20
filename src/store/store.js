import {configureStore} from '@reduxjs/toolkit';

import textReducer from './text.slice';

const store = configureStore({
    reducer: {
        textReducer
    }
});

export default store;