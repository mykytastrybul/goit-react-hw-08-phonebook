import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList ';
import Filter from 'components/Filter/Filter';

const ContactsPage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
