import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    signupUser: builder.mutation({
      query: ({ name, email, password }) => ({
        url: '/users/signup',
        method: 'POST',
        body: {
          name,
          email,
          password,
        },
      }),
      invalidatesTags: ['Users'],
    }),
    loginUser: builder.mitation({
      query: ({ email, password }) => ({
        url: '/users/login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
      invalidatesTags: ['Users'],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: 'users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = usersApi;
