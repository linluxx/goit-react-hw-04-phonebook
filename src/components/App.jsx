import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, Title, ContactsTitle } from './App.styled';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FaUserFriends, FaPhoneAlt } from 'react-icons/fa';

const LS_KEY = 'contacts';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem(LS_KEY));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    contact.id = nanoid();

    const names = this.state.contacts.map(item => item.name);
    if (names.includes(contact.name)) {
      return Notify.warning(`${contact.name} is already in contacts`, {
        position: 'center-top',
      });
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
    this.filterContacts();
  };
  Title;
  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filtered = this.filterContacts();
    return (
      <Container onClick={evt => {}}>
        <Title>
          <FaPhoneAlt />
          Phonebook
        </Title>
        <ContactForm addContact={this.addContact} />
        <ContactsTitle>
          <FaUserFriends />
          Contacts
        </ContactsTitle>
        <Filter filter={this.state.filter} onFilter={this.onFilter} />
        <ContactList filtered={filtered} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}
