import { QueryOptionsType, Product } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchSearchedProducts = async ({ queryKey}: any) => {
  const [_key, _params] = queryKey;
  
  
  const { data } = await http.get(`${API_ENDPOINTS.SEARCH}?currentPage=${1}&pageSize=${10000}&name=${_params.text}`);
  return data;
};
export const useSearchQuery = (options: QueryOptionsType) => {
  
  return  useQuery<Product[], Error>(
   
    
    [API_ENDPOINTS.PRODUCTS, options],
     fetchSearchedProducts,
     { enabled: Boolean(options.text) }
  );
};
