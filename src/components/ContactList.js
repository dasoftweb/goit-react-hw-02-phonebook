// import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete }) => (
  <ul className="contact-list">
    {contacts.map(({ id, name, number }) => (
      <ContactItem id={id} name={name} number={number} onDelete={onDelete} />
    ))}
  </ul>
);

export default ContactList;
