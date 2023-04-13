import { Contact, Button, List, Block, Img } from './ContactList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, removeContact } from '../Redux/operation';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.data);

  useEffect(() => {
    dispatch(getContact());
    console.log('len',contacts.length)
  }, [dispatch, contacts.length]);

  const contactFilter = () => {
    if (filter === '') return contacts;

    return contacts.filter(item => item.name.toLowerCase().includes(filter));
  };
  const contactList = contactFilter();
  return (
    <List>
      {contactList?.map(({ avatar, name, number, id }) => {
        return (
          <Contact key={id}>
            <Img src={avatar} alt={name} />
            <Block>
              <p>{name}</p>
              <p>{number}</p>
            </Block>
            <Button type="button" onClick={() => dispatch(removeContact(id))}>
              Delete
            </Button>
          </Contact>
        );
      })}
    </List>
  );
};

export default ContactList;

// ContactList.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDelete: PropTypes.func.isRequired,
// };
