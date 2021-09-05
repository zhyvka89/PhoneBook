// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import axios from 'axios';

// const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://connections-api.herokuapp.com',
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.token;
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`);
//     }
//     return headers;
//   },
// });
// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, info }) => {
//     try {
//       const {data} = await axios({ url: baseUrl + url, method, info })
//       token.set(data.token);
//       return data
//     } catch (error) {
//       let err = axiosError
//       return {
//         error: { status: err.response?.status, data: err.response?.data },
//       }
//     }
//   }

export const usersApi = createApi({
  reducerPath: 'usersApi',
  //   baseQuery: axiosBaseQuery({
  //   baseUrl: 'https://connections-api.herokuapp.com',
  // }),
  // baseQuery: baseQuery,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => '/users/current',
      providesTags: ['Users'],
    }),
    signupUser: builder.mutation({
      query: ({ name, email, password }) => ({
        url: '/users/signup',
        method: 'POST',
        body: {
          name: name,
          email: email,
          password: password,
        },
        transformResponse: response => response.data,
      }),
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

// export const userApi = createApi({
//   reducerPath: 'userApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//   }),
//   tagTypes: ['User'],
//   endpoints: builder => ({
//     fetchUser: builder.query({
//       query: () => '/users/current',
//       providesTags: ['User'],
//     }),
//     createUser: builder.mutation({
//       query: ({ name, email, password }) => ({
//         url: '/users/signup',
//         method: 'POST',
//         body: {
//           name: name,
//           email: email,
//           password: password,
//         },
//       }),
//       invalidatesTags: ['User'],
//     }),
//   }),
// });

// export const { useFetchUserQuery, useCreateUserMutation } = userApi;

// export const { useFetchUserQuery, useCreateUserMutation } = userApi;
