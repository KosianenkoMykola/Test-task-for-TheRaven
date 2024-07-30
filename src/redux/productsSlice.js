import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'products',
    initialState: {
      items: []
    }
  });
  
  // export const { addContact, deleteContact } = contactsSlice.actions;
  export default contactsSlice.reducer;
  export const selectContacts = state => state.contacts.items;