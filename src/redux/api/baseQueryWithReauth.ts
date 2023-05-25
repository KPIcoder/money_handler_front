import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_DEV_API_URL
    : import.meta.env.VITE_PRODUCTION_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  credentials: "include",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    const token = localStorage.getItem("apikey");
    if (token) {
      headers.set("apikey", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const { data } = await baseQuery("/reset-tokens", api, extraOptions);

    if (data) {
      result = await baseQuery(args, api, extraOptions);
    } else {
      window.location.pathname = "login";
    }
  }
  return result;
};
