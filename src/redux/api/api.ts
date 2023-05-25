import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {
  IAuthUser,
  IAuthUserCredentials,
  IAuthUserLoginInfo,
} from "../../interfaces/auth.interface";
import { Res } from "../../interfaces/common";
// redux
import { baseQueryWithReauth } from "./baseQueryWithReauth";
import { Transaction } from "../../interfaces/transaction.interface";

// enum Tags {
//   authUser = 'Auth User'
// }

export const api = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["AuthUser"],
  endpoints: (builder) => ({
    register: builder.mutation<Res<IAuthUser>, IAuthUserCredentials>({
      query(userCredentials) {
        return {
          url: "auth/register",
          method: "POST",
          body: userCredentials,
        };
      },
      invalidatesTags: ["AuthUser"],
      async onQueryStarted(arg, { queryFulfilled }) {
        const { data: response } = await queryFulfilled;
      },
    }),
    login: builder.mutation<Res<IAuthUser>, IAuthUserLoginInfo>({
      query(userLoginInfo) {
        return {
          url: "auth/login",
          method: "POST",
          body: userLoginInfo,
          credentials: "include",
        };
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        const { data: response } = await queryFulfilled;
        localStorage.setItem("accessToken", response.data.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);
      },
    }),
    logout: builder.mutation<Res<void>, void>({
      query() {
        const accessToken = localStorage.getItem("accessToken");
        return {
          url: "auth/logout",
          method: "GET",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        };
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        await queryFulfilled;
        localStorage.clear();
      },
    }),
    resetTokens: builder.query<
      Res<{ accessToken: string; refreshToken: string }>,
      void
    >({
      query() {
        const refreshToken = localStorage.getItem("refreshToken");
        return {
          url: "auth/reset-tokens",
          headers: {
            authorization: `Bearer ${refreshToken}`,
          },
        };
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        const { data: response } = await queryFulfilled;
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
      },
    }),
    getAuthUser: builder.query<Res<IAuthUser>, void>({
      query() {
        const accessToken = localStorage.getItem("accessToken");
        return {
          url: "auth/user",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        };
      },
    }),
    getUsers: builder.query<Res<IAuthUser[]>, void>({
      query: () => "/user",
      providesTags: ["AuthUser"],
    }),
    getTransactions: builder.query<Res<Transaction[]>, void>({
      query: () => "/transaction",
    }),
    addTransaction: builder.mutation<Res<Transaction>, Transaction>({
      query(transaction) {
        return {
          method: "POST",
          url: "/transaction",
          body: transaction,
        };
      },
    }),
    deleteTransaction: builder.mutation<Res<string>, { id: number }>({
      query(id) {
        return {
          method: "DELETE",
          url: `/transaction?id=${id}`,
        };
      },
    }),
    updateTransaction: builder.mutation<Res<Transaction>, Transaction>({
      query(transaction) {
        return {
          method: "UPDATE",
          url: "/transaction",
          body: transaction,
        };
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useResetTokensQuery,
  useGetUsersQuery,
  useGetAuthUserQuery,

  useGetTransactionsQuery,
  useAddTransactionMutation,
  useDeleteTransactionMutation,
  useUpdateTransactionMutation,
} = api;
