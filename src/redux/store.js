import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsApi } from './phonebook/phonebookApi';
import { usersApi } from './user/userApi';
import auth from './authSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    auth,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    usersApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

// setupListeners(store.dispatch);
