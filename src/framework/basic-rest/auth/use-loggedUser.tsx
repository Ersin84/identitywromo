import { UserQueryOptionsType, User } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchLoggedUser = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const {
    data: { data },
  } = await http.get(API_ENDPOINTS.LOGGEDUSER);
  
  return { data: { data } };
};
export const useLoggedUserQuery = (options: UserQueryOptionsType) => {
  return useQuery<{ data: { data: User[] } }, Error>(
    [API_ENDPOINTS.LOGGEDUSER, options],
    fetchLoggedUser
  );
};
