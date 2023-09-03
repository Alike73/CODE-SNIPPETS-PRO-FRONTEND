
import { configureStore } from '@reduxjs/toolkit';
import snippetsItems from './SnippetsSlice';

export default configureStore({
    reducer: {
        snippetsItems: snippetsItems
    }
})