import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './phonebook-actions';

const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, action) => [...state, action.payload],
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});
export default combineReducers({
  items,
  filter,
});

// варіант без toolkit
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return [...state.filter(({ id }) => id !== payload)];

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'contact/ChangeFilter':
//       return payload;

//     default:
//       return state;
//   }
// };
// файл phonebook-type.js видаляємо
