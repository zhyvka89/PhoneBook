import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reduserPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
    }),
    addContact: builder.mutation({
      query: (text, number) => ({
        url: '/contact',
        method: 'POST',
        body: {
          name: text,
          number,
        },
      }),
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
