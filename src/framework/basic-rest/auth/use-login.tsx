import { useUI } from '@contexts/ui.context';
import Cookies from 'js-cookie';
import { useMutation } from 'react-query';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';

export interface LoginInputType {
  userName: string;
  password: string;
  remember_me: boolean;
}
async function login(input: LoginInputType) {
  let data = await http.post(API_ENDPOINTS.LOGIN,
    JSON.stringify({
    userName: input.userName,
    password: input.password
    
  }),
 
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'}
   },
   
  );
  return {
    response:data.data
  }
 
}
export const useLoginMutation = () => {
  const { authorize, closeModal } = useUI();
 
  return useMutation((input: LoginInputType) => login(input), {
     
    onSuccess: (data) => {
      // Cookies.set('auth_token', data.token);
      
      console.log(data.response.message);
        if(data.response.success){
          authorize();
          Cookies.set('auth_token', data.response.data.token);
          // closeModal();
        }
      
    },
    onError: (error) => {
      console.log(error, 'login error response');
    },
  });
};
