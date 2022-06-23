import Input from '@components/ui/form/input';
import Button from '@components/ui/button';
import TextArea from '@components/ui/form/text-area';
import Success from '@components/ui/success';

import { useForm } from 'react-hook-form';
import { useModalState } from '@components/common/modal/modal.context';
import { useModalAction } from '@components/common/modal/modal.context';
import CloseButton from '@components/ui/close-button';
import Heading from '@components/ui/heading';
import Map from '@components/ui/map';
import { useTranslation } from 'next-i18next';

interface ContactFormValues {
  title: string;
  default: boolean;
  lat: number;
  lng: number;
  formatted_address?: string;
}

const DeleteProductForm: React.FC = () => {
  const { t } = useTranslation();
  const { data } = useModalState();
  const placeholderImage = `/assets/images/warning.png`;
    
  const { closeModal } = useModalAction();

  function onSubmit(values: ContactFormValues, e: any) {
    console.log(values, 'Add Address');
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    
  });

  return (
    <div className="w-full md:w-[300px] lg:w-[400px] xl:w-[500px] mx-auto p-5 sm:p-8 bg-skin-fill rounded-md">
      <CloseButton onClick={closeModal} />
      <div className="text-center mb-9 pt-2.5">
        <div className='inline-flex focus:outline-none' onClick={closeModal}>
         <img src={placeholderImage} alt="Warning image" width={100} height={100} />
        </div>
        <p className="text-sm md:text-base text-body mt-3 sm:mt-4 mb-8 sm:mb-10">
          {t('common:text-delete-question')}
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-6">
          <Input
            variant="solid"
            type='hidden'
            defaultValue={data}
            {...register('title', { required: 'Title Required' })}
            error={errors.title?.message}
          />
        </div>
       
        <div className="flex flex-row  justify-end">
        <Button className="h-11 md:h-12 mx-3 mt-1.5" variant='cancel' onClick={closeModal} type="button">
            {t('common:text-cancel')}
        </Button>
          <Button className="h-11 md:h-12 mx-3 mt-1.5" type="submit">
            {t('common:text-delete')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DeleteProductForm;
