import axios from 'axios';

axios.defaults.baseURL = 'https://6435b21983a30bc9ad67e9a0.mockapi.io/contacts';

export const addContactApi = contact => {
  return axios.post('/contacts', contact).then(({ data }) => {
    return { ...contact, id: data.id, number: data.number, name: data.name };
  });
};

export const getContactApi = () => {
  return axios
    .get('/contacts')
    .then(({ data }) =>
      Object.entries(data).map(([id, dat]) => ({
        id: dat.id,
        name: dat.name,
        number: dat.number,
        avatar: dat.avatar,
      }))
    );
};

export const removeContactApi = id => {
  return axios.delete(`/contacts/${id}`).then(() => id);
};
