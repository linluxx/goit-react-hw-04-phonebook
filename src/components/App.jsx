import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, Title, ContactsTitle } from './App.styled';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FaUserFriends, FaPhoneAlt } from 'react-icons/fa';

const LS_KEY = 'contacts';
export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem(LS_KEY)) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    contact.id = nanoid();

    const names = contacts.map(item => item.name);
    if (names.includes(contact.name)) {
      return Notify.warning(`${contact.name} is already in contacts`, {
        position: 'center-top',
      });
    }
    setContacts([...contacts, contact]);
  };

  const deleteContact = contactId => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== contactId);
    });
  };

  const onFilter = evt => {
    setFilter(evt.currentTarget.value);
    filterContacts();
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filtered = filterContacts();
  return (
    <Container>
      <Title>
        <FaPhoneAlt />
        Phonebook
      </Title>
      <ContactForm addContact={addContact} />
      <ContactsTitle>
        <FaUserFriends />
        Contacts
      </ContactsTitle>
      <Filter filter={filter} onFilter={onFilter} />
      <ContactList filtered={filtered} onDeleteContact={deleteContact} />
    </Container>
  );
};
