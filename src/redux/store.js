import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './phonebook/phonebook-reducer';
import { contactsApi } from './phonebook/phonebook-slice';
import { usersApi } from './user/user-slice';
// import { filterContact } from './phonebook/phonebook-actions';

const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
