import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import * as React from 'react';

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </>
  );
}
