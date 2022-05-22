import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './contactsThunk';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    loading: false,
    error: null,
  },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [getContacts.pending](state, _) {
      state.loading = true;
    },
    [getContacts.fulfilled](state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    [getContacts.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [addContact.pending](state, _) {
      state.loading = true;
    },
    [addContact.fulfilled](state, action) {
      state.loading = false;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state, _) {
      state.loading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    [deleteContact.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
