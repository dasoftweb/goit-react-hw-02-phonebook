const ContactList = ({ contacts, onDelete }) => (
  <ul className='contact-list'>
    {contacts.map(({ id, name, number }) => (
      <li className='contact-list-item' key={id}>
        <p className='bold'>{name}</p>
        <p>{number}</p>
        <button className='button' onClick={() => onDelete(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
