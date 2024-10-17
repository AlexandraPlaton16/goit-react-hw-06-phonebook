import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        onDelete={() => onDelete(id)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
