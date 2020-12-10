import React from 'react';
import PropTypes from 'prop-types';
import './contactList.scss'


const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className='list'>
    {contacts.map(({ id, name, number }) => (
      <li
        className='listItem'
        key={id}>
        <span className='listItemText'>{name}:</span>
        <span className='listItemText'>{number}</span>
        <button
          className='button'
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
  
ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;