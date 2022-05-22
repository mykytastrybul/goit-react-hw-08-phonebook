import { useDispatch, useSelector } from 'react-redux';
import { getStateFilter } from 'redux/contacts/contactsSelector';
import { filterContacts } from 'redux/store';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getStateFilter);

  const getFilterValue = e => dispatch(filterContacts(e.target.value));

  return (
    <label>
      Filter
      <input
        type="text"
        value={filter}
        onChange={getFilterValue}
        placeholder="Search..."
      />
    </label>
  );
}
