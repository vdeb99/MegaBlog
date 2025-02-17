import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../Store/AuthSlice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        
    }
});


export default store;