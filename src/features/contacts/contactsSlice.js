import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };
      if (
        !state.contacts.some(
          contact =>
            contact.name.toLowerCase() === newContact.name.toLowerCase()
        )
      ) {
        state.contacts.push(newContact);
      } else {
        alert(`${newContact.name} is already in contacts.`);
      }
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } =
  contactsSlice.actions;
export default contactsSlice.reducer;
