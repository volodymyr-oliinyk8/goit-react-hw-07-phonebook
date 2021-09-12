import { createSelector } from '@reduxjs/toolkit';
const getContactFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getContactFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default { getContactFilter, getVisibleContacts, getAllContacts };

// варіант без мемоізації
// const getVisibleContacts = state => {
//   const filter = getAllContacts(state);
//   const allContacts = getAllContacts(state);
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };
