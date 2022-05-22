import { useState } from 'react';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/services';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [params, setParams] = useState({ name: '', phone: '' });

  const [addContact] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setParams({ ...params, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    contacts.some(contact => contact.name === params.name)
      ? Notify.failure(`Contact ${params.name} already exists`)
      : newContact();
  }

  const newContact = () => {
    addContact(params);
    Notify.info(`Contact ${params.name} added to phone book`);
    reset();
  };

  const reset = () => {
    setParams({ name: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={params.name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Phone number
        <input
          type="tel"
          name="phone"
          value={params.phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={s.submitButton}>
        Add contact
      </button>
    </form>
  );
}
