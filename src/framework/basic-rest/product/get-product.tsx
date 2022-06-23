import { Product } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchProduct = async (_Id: undefined) => {
  const { data } = await http.get(`${API_ENDPOINTS.PRODUCT}?productId=${_Id}`);
  
  
  return data;
};
export const useProductQuery = (Id: undefined) => {
  return useQuery<Product, Error>([API_ENDPOINTS.PRODUCT, Id], () =>
    fetchProduct(Id)
  );
};
