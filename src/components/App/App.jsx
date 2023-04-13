import {Form} from '../Form/Form';
import ContactList from '../ContactList/ContactList';
import Section from '../Section/Section';
import Filter from '../Filter/Filter';
import { AppStyled } from './App.styled';


export function App() {

  return (
    <AppStyled>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter/>
        <ContactList />
      </Section>
    </AppStyled>
  );
}
