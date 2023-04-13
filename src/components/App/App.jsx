import {Form} from '../Form/Form';
import ContactList from '../ContactList/ContactList';
import Section from '../Section/Section';
import Filter from '../Filter/Filter';
import { AppStyled } from './App.styled';
import { useSelector } from 'react-redux';



export function App() {
  const isLoading = useSelector(state =>state.contacts.isLoading)
console.log(isLoading)
  return (
    <AppStyled>
      <Section title="Phonebook">
        {!isLoading? <Form />:<h1>...Downloading</h1>}
      </Section>
      <Section title="Contacts">
        <Filter/>
        <ContactList />
      </Section>
    </AppStyled>
  );
}
