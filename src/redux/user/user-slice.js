import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: baseQuery,
  tagTypes: ['Users'],
  endpoints: builder => ({
    signupUser: builder.mutation({
      query(body) {
        return {
          url: '/users/signup',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Users'],
    }),
    loginUser: builder.mutation({
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
