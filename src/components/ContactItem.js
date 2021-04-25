import PropTypes from 'prop-types';

const ContactItem = ({ contacts, onDelete }) =>
  contacts.map(({ id, name, number }) => (
    <li className="contact-list-item" key={id}>
      <p className="bold">{name}</p>
      <p>{number}</p>
      <button className="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  ));
export default ContactItem;
