import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete}) => (
  <ul className="contact-list">
    <ContactItem contacts={contacts} onDelete={onDelete} />
  </ul>
);

export default ContactList;
