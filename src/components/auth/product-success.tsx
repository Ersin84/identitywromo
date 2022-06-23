import Button from '@components/ui/button';
import Input from '@components/ui/form/input';
import Success from '@components/ui/success';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { useModalAction } from '@components/common/modal/modal.context';
import CloseButton from '@components/ui/close-button';
import Link from '@components/ui/link'
import { ROUTES } from '@utils/routes';

function handleSignIn() {
  
}


const ProductSuccess = () => {
  const { t } = useTranslation();
  const { closeModal, openModal } = useModalAction();
 

  


  return (
    <div className="py-6 px-5 sm:p-8 bg-skin-fill mx-auto rounded-lg w-full sm:w-96 md:w-450px">
      <CloseButton onClick={closeModal} />
      <div className="text-center mb-9 pt-2.5">
        <div onClick={closeModal}>
          <Success />
        </div>
        <p className="text-sm md:text-base text-body mt-3 sm:mt-4 mb-8 sm:mb-10">
          {t('common:product-success-message')}
        </p>
      </div>
              
      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-10 mb-6 sm:mb-7">
        <hr className="w-full border-gray-300" />
        <span className="absolute -top-2.5 px-2 bg-skin-fill">
          {t('common:products-link')}
        </span>
      </div>
      <div className="text-sm sm:text-15px text-skin-muted text-center" onClick={closeModal}>
        {t('common:link')}{' '}
        <Link
            href={ROUTES.USERPRODUCT}
            
          className="text-skin-base underline font-medium hover:no-underline focus:outline-none"
          
        >
          {t('common:myproduct')}
        </Link>
      </div>
    </div>
  );
};

export default ProductSuccess;
