import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsThunk';
import s from './ContactListItem.module.css';

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  const deletingContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li className={s.item}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button
        onClick={() => {
          deletingContact(id);
        }}
        className={s.deleteButton}
      >
        Delete
      </button>
    </li>
  );
}
