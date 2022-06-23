import { useState,useRef } from 'react';
import Input from '@components/ui/form/input';
import PasswordInput from '@components/ui/form/password-input';
import DateInput from '@components/ui/form/dateinput';
import Button from '@components/ui/button';
import { useForm } from 'react-hook-form';
import Logo from '@components/ui/logo';
import { useSignUpMutation, SignUpInputType } from '@framework/auth/use-signup';
import Link from '@components/ui/link';
import { useTranslation } from 'next-i18next';
import Image from '@components/ui/image';
import { useModalAction } from '@components/common/modal/modal.context';
import Switch from '@components/ui/switch';
import CloseButton from '@components/ui/close-button';
import cn from 'classnames';
import { ROUTES } from '@utils/routes';

interface SignUpFormProps {
  isPopup?: boolean;
  className?: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  isPopup = true,
  className,
}) => {
  const { t } = useTranslation();
  const { mutate: signUp, isLoading,isSuccess,isError,data } = useSignUpMutation();

  const { closeModal, openModal } = useModalAction();
  const [remember, setRemember] = useState(false);
  if(data?.response.success){
    closeModal();
    openModal('LOGIN_VIEW');
   }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpInputType>();
  const password = useRef({});
  password.current = watch("password", "");
  function handleSignIn() {
    return openModal('LOGIN_VIEW');
  }
  function handleForgetPassword() {
    return openModal('FORGET_PASSWORD');
  }
  function onSubmit({ userName,surname,name,confirmPassword, email,gender, password,birthDate, remember_me }: SignUpInputType) {
    signUp({
      name,
      surname,
      userName,
      email,
      password,
      confirmPassword,
      birthDate,
      gender,
      remember_me,
    });
    
    
  }
  return (
    <div
      className={cn(
        'flex bg-skin-fill mx-auto rounded-lg w-full lg:w-[1000px] 2xl:w-[1200px]',
        className
      )}
    >
      {isPopup === true && <CloseButton onClick={closeModal} />}
      <div className="flex bg-skin-fill mx-auto rounded-lg overflow-hidden w-full">

        <div className="md:w-[55%] xl:w-[50%] registration hidden md:block">
          <Image
            src="/assets/images/registration.png"
            alt="sign up"
            width={800}
            height={620}
            className="w-full"
          />
        </div>
        <div className="w-full md:w-[45%] xl:w-[50%] py-6 sm:py-10 px-4 sm:px-8 lg:px-12  rounded-md shadow-dropDown flex flex-col justify-center">
          <div className="text-center mb-6 pt-2.5">
            <div onClick={closeModal}>
              <Logo />
            </div>
            <h4 className="text-skin-base font-semibold text-xl sm:text-2xl  sm:pt-3 ">
              {t('common:text-sign-up-for-free')}
            </h4>
            <div className="text-sm sm:text-base text-body text-center mt-3 mb-1">
              {t('common:text-already-registered')}
              <button
                type="button"
                className="ms-1 text-sm sm:text-base text-skin-primary font-semibold hover:no-underline focus:outline-none"
                onClick={handleSignIn}
              >
                {t('common:text-sign-in-now')}
              </button>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center"
            noValidate
          >
            <div className="flex flex-row mb-3 ">
              <Input
                label={t('forms:label-first-name')}
                type="text"
                placeholder={t('forms:placeholder-firstname')}
                variant="outline"
                {...register('name', {
                  required: 'forms:first-name-required',
                })}
               
                error={errors.name?.message}
              />
              <Input
                label={t('forms:label-last-name')}
                type="text"
                variant="outline"
                placeholder={t('forms:placeholder-lastname')}
                {...register('surname', {
                  required: 'forms:last-name-required',
                })}
                error={errors.surname?.message}
              />
            </div>
            <div className="flex flex-col space-y-4 mb-3">
            <Input
                label={t('forms:label-name')}
                type="text"
                variant="outline"
                placeholder={t('forms:placeholder-username')}
                {...register('userName', {
                  required: `${t('forms:name-required')}`,
                  pattern: {
                    value:
                    /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/,
                    message: t('forms:username-error'),
                  },
                })}
                error={errors.userName?.message}
                errorApi={data?.response.message==="DuplicateUserName"?"forms:dublicate-username":""}
              />
              <Input
                label={t('forms:label-email')}
                type="text"
                variant="outline"
                placeholder={t('forms:label-email')}
                {...register('email', {
                  required: `${t('forms:email-required')}`,
                  // pattern: {
                  //   value:
                  //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  //   message: t('forms:email-error'),
                  // },
                })}
                error={errors.email?.message}
                errorApi={data?.response.message==="this email already registered"?"forms:dublicate-email":""}
              />
              </div>
             <div className="flex flex-row mb-3 mt-3 ">

              <PasswordInput
                label={t('forms:label-password')}
                error={errors.password?.message}
                errorApi={data?.response.message==="email or password invalid"?"forms:invalid-password":""}
                placeholder={t('forms:placeholder-password')}
                {...register('password', {
                  required: `${t('forms:password-required')}`,
                  minLength: {
                    value: 4,
                    message:`${t('forms:password-required')}`
                  }
                })}
              />
               <PasswordInput
                label={t('forms:label-repassword')}
                error={errors.confirmPassword?.message}
                errorApi={data?.response.message==="email or password invalid"?"forms:invalid-password":""}

                placeholder={t('forms:placeholder-repassword')}
                {...register('confirmPassword', {
                  validate: value =>
                  value === password.current || `${t('forms:password-match')}` ,
                  
                  required: `${t('forms:repassword-required')}`,
                })}
              />
              </div>
              <div className="flex flex-row mb-3 mt-3">
                  <DateInput
                    label={t('forms:label-datetime')}
                    errorApi=""
                    error={errors.birthDate?.message}
                    {...register('birthDate', {
                      required: `${t('forms:datetime-required')}`,

                    })}
                    />
                    <div className="block ml-2">
                        <label
                              htmlFor="gender"
                              className="block font-normal text-sm leading-none mb-3 cursor-pointer text-skin-base text-opacity-70"
                              
                              
                            >
                              {t('forms:label-gender')}
                            </label>
                      <div className='relative'>
                      <select className='border border-solid border-gray-300 block rounded  focus:border-2 focus:border-skin-primary focus:outline-none py-2.5 px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-13px  font-body rounded placeholder-[#B3B3B3] min-h-12 transition duration-200 ease-in-out text-skin-base ' >
                      <option value="">Seçin</option>
                        <option value="1">Qadın</option>
                        <option value="2">Kişi</option>
                      </select>
                      
                      </div>
                    </div>
              </div>
              <div className="flex flex-col space-y-4 mt-3">
                  
              <div className="flex items-center justify-center">
                <div className="flex items-center flex-shrink-0">
                  <label className="switch relative inline-block w-10 cursor-pointer">
                    <Switch checked={remember} onChange={setRemember} />
                  </label>

                  <label
                    htmlFor="remember"
                    className="flex-shrink-0 text-sm text-heading ps-5 mt-1 cursor-pointer"
                  >
                    {t('forms:label-remember-me')}
                  </label>
                </div>
                <div className="flex ms-auto mt-[2px]" onClick={closeModal}>
                  <Link
                    href={ROUTES.PRIVACY}
                    className="text-end text-sm text-heading ps-3 hover:no-underline hover:text-skin-base focus:outline-none focus:text-skin-base"
                  >
                    {t('common:text-privacy-and-policy')}
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Button
                  type="submit"
                  loading={isLoading}
                  disabled={isLoading}
                  className="h-11 md:h-12 w-full mt-2 font-15px md:font-15px tracking-normal"
                  variant="formButton"
                >
                  {t('common:text-register')}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
