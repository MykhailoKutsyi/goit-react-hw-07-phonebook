import { useSelector } from 'react-redux';
import { getFilter, getFilteredContacts } from '../../redux/selectors';
import { useGetContactsQuery } from '../../redux/services';

import ContactListItem from 'components/ContactListItem';
import s from './ContactList.module.css';

export default function ContactList() {
  const { data } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const contacts = getFilteredContacts(filter, data);

  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map(({ createdAt, id, name, phone }) => (
          <ContactListItem
            key={id}
            id={id}
            createdAt={createdAt}
            name={name}
            phone={phone}
          />
        ))}
    </ul>
  );
}
