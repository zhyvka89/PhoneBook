// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import {
//   fetchContacts,
//   deleteContact,
// } from '../../redux/phonebook/phonebook-operations';
// import { getFilteredContacts } from '../../redux/phonebook/phonebook-selectors';
// import { useGetContactsQuery } from '../../redux/phonebook/phonebook-slice';

import styles from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  // const contacts = useSelector(getFilteredContacts);
  // const dispatch = useDispatch();
  // const { data: contacts } = useGetContactsQuery();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <ol className={styles.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: <span className={styles.phonenumber}>{number}</span>
            <button
              type="button"
              className={styles.button}
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ol>
  );
}
