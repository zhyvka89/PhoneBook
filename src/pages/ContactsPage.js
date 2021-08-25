import { useState } from 'react';
// import { useGetContactsQuery } from '../../redux/phonebook/phonebook-slice';

import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Form from '../components/Form/Form';
import Modal from '../components/Modal/Modal';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../redux/phonebook/phonebook-slice';

export default function ContactsPage() {
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { data: contacts } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const handleFilterOnChange = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return filteredContacts;
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      {showModal && (
        <Modal onCloseModal={toggleModal}>
          <Form />
        </Modal>
      )}
      <Filter filterValue={filter} onChange={handleFilterOnChange} />
      {contacts && (
        <ContactList
          contacts={getFilteredContacts()}
          onDelete={deleteContact}
        />
      )}
      <button type="button" onClick={toggleModal}>
        Add New Contact
      </button>
    </>
  );
}
