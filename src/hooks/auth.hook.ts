import useCookies from "react-cookie/cjs/useCookies";
import { useGetAuthUserQuery } from "../redux/api/api";

export const useAuth = () => {
  const [cookies] = useCookies();
  const { data: response } = useGetAuthUserQuery();

  const isAuthenticated = !!cookies.isAuthorised ?? false;
  const authUser = response?.data;
  return { isAuthenticated, authUser };
};
