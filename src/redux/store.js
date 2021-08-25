import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './phonebook/phonebook-reducer';
import { contactsApi } from './phonebook/phonebook-slice';
// import { filterContact } from './phonebook/phonebook-actions';

const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    // filter: createReducer('', {
    //   [filterContact]: (_, action) => action.payload,
    // })
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
