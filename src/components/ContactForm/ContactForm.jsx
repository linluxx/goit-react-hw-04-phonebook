import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, SubmitButton } from './ContactForm.styled';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetField = () => {
    setName('');
    setNumber('');
  };
  const onFormSubmit = evt => {
    evt.preventDefault();
    addContact({ name, number });
    resetField();
  };

  const onInputChange = evt => {
    switch (evt.currentTarget.name) {
      case 'name':
        setName(evt.currentTarget.value);
        break;
      case 'number':
        setNumber(evt.currentTarget.value);
        break;
      default:
        console.log('There is no such value');
    }
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Enter the name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onInputChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          placeholder="Enter the number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onInputChange}
        />
      </Label>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};
ContactForm.propTypes = {
  addContact: PropTypes.func,
};
