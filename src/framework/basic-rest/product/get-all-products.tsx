import { QueryOptionsType, Product } from '@framework/types';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import http from '@framework/utils/http';
import shuffle from 'lodash/shuffle';
import { useInfiniteQuery } from 'react-query';
import { isQueryKey } from 'react-query/types/core/utils';
type PaginatedProduct = {
  data: Product[];
  dataCount:number;
  paginatorInfo: any;
};
const fetchProducts = async ({queryKey,pageParam='1'}: any) => {
  const [_key, _params] = queryKey;
  const {limit,category="",sort_by=""}=_params;
  //  const {page=1} =pageParam
  if(pageParam==null){
    pageParam='1';
    
  }
    let link;
    // if(typeof _params?.category=="undefined"){
         link=`${API_ENDPOINTS.SEARCH}?currentPage=${pageParam}&pageSize=${limit}&sortField=${sort_by}&CategoryName=${category}`
         
    // }else{
    //   link=`${API_ENDPOINTS.SEARCH}?currentPage=${pageParam}&pageSize=${_params.limit}&CategoryName=${_params.category}`
    //   console.log(link);
    // }
    //  link=`${API_ENDPOINTS.RELATED_PRODUCTS}?categoryId=1`

  const { data } = await http.get(link);
  
  return {
    dataCount:data.data.dataCount,
    data: shuffle(data) as Product[],
    paginatorInfo: {
      nextPageUrl:""
    }
  };
};

const useProductsQuery = (options: QueryOptionsType) => {
  
  return useInfiniteQuery<PaginatedProduct, Error> (
    [API_ENDPOINTS.PRODUCTS, options],
    fetchProducts,
    {
      getNextPageParam:  (_lastPage:any,pages:any)=>{
        let data1;
        if(typeof _lastPage.data[0] =='object'){
         data1=_lastPage?.data[0]
        }else if(typeof _lastPage.data[1] =='object'){
         data1=_lastPage?.data[1]
        }
        else{
         data1=_lastPage?.data[2]
        }
        
        if (data1.currentPage<data1.pageCount) {
         
           return  data1.currentPage +1;
          

        }
        else{
          return false;
        }
      },
      
    }
  );
};

export { useProductsQuery, fetchProducts };
