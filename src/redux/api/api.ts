import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {
  IAuthUser,
  IAuthUserCredentials,
  IAuthUserLoginInfo,
} from "../../interfaces/auth.interface";
import { Res } from "../../interfaces/common";
// redux
import { authActions } from "../slices/auth.slice";
import { baseQueryWithReauth } from "./baseQueryWithReauth";

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
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const { data: response } = await queryFulfilled;
        dispatch(authActions.setAuthUser(response.data));
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
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const { data: response } = await queryFulfilled;
        dispatch(authActions.setAuthUser(response.data));
        localStorage.setItem("accessToken", response.data.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);
      },
    }),
    logout: builder.query({
      query() {
        return {
          url: "auth/logout",
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        await queryFulfilled;
        dispatch(authActions.logout());
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
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutQuery,
  useResetTokensQuery,
  useGetUsersQuery,
  useGetAuthUserQuery,
} = api;
