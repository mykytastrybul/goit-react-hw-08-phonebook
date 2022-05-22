import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsThunk';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useEffect } from 'react';
import { getFiltered } from 'redux/contacts/contactsSelector';

export default function ContactList() {
  const dispatch = useDispatch();
  const filtered = useSelector(getFiltered);

  useEffect(() => {
    dispatch(getContacts());
    //eslint-disable-next-line
  }, []);

  return (
    <ul className={s.list}>
      {filtered.length > 0 &&
        filtered.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
    </ul>
  );
}
