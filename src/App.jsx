import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
  updateFilter,
} from './features/contacts/contactsSlice';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import styles from './App.module.css';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleAddContact = ({ name, number }) => {
    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />

      <h2 className={styles.title}>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />

      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;
