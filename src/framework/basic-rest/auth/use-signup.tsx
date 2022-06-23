import { useUI } from '@contexts/ui.context';
import Cookies from 'js-cookie';
import { useMutation } from 'react-query';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
export interface SignUpInputType {
  email: string;
  name:string,
  surname:string,
  password: string;
  confirmPassword:string,
  userName: string;
  birthDate:string,
  gender:number,
  remember_me: boolean;
}
async function signUp(input: SignUpInputType) {
  let data  = await http.post(API_ENDPOINTS.REGISTER,
    JSON.stringify({
    email: input.email,  
    name: input.name,
    surname: input.surname,
    userName: input.userName,
    password: input.password,
    confirmPassword:input.confirmPassword,
    birthDate:new Date(input.birthDate).toISOString() ,
    gender:input.gender,
  }),
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'}
   }
  
  );
  return {
    response:data.data
  }
}
export const useSignUpMutation = () => {
  const { authorize, closeModal } = useUI();
  return useMutation((input: SignUpInputType) => signUp(input), {
    
    onSuccess: (data) => {
      // Cookies.set('auth_token',);
      if(data.response.success){
        authorize();
        Cookies.set('auth_token', data.response.data.token);
        // closeModal();
      }
      // closeModal();
    },
    onError: (error) => {
      console.log(error, 'login error response');
    },
  });
 
};
