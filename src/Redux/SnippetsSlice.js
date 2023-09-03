
import { createSlice } from '@reduxjs/toolkit';

export const snippetsSlice = createSlice({
    
    name: 'snippetsItems',

    initialState: {
        selectedCategory: 'ALL',
        isActiveIco: false,
        isOpen: false,
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },

        setActiveIco: (state, action) => {
            state.isActiveIco = action.payload;
        },

        setIsOpen: (state, action) => {
            state.isOpen = action.payload;
        },
    },
    
});

export const getSelectedCategory = state => state.snippetsItems.selectedCategory;
export const getIsActiveIco = state => state.snippetsItems.isActiveIco;
export const getIsOpen = state => state.snippetsItems.isOpen;
export const { filterCategory, setActiveIco, setIsOpen } = snippetsSlice.actions;
export default snippetsSlice.reducer;