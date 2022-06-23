import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { FaChevronDown } from 'react-icons/fa';
import LocationIcon from '@components/icons/location-icon';
import { useModalAction } from '@components/common/modal/modal.context';
import { useUI } from '@contexts/ui.context';
import { AiOutlinePlus } from 'react-icons/ai';


interface DeliveryProps {
  className?: string;
}
const Delivery: React.FC<DeliveryProps> = ({ className }) => {
  const { t } = useTranslation('common');
  const { isAuthorized } = useUI();
  const { openModal } = useModalAction();
  function handleDeliveryView() {
    !isAuthorized ? openModal('LOGIN_VIEW') : openModal('DELIVERY_VIEW');
    // openModal('DELIVERY_VIEW');
  }

  return (
    <div className={cn('delivery-address', className)}>
      <button
        className="border hover:text-white hover:bg-opacity-90 focus:bg-opacity-70 text-skin-inverted border-skin-base rounded-md focus:outline-none flex-shrink-0 text-sm lg:text-15px font-medium text-skin-base px-2.5 md:px-3 lg:px-[18px] py-2 md:py-2.5 lg:py-3 flex items-center transition-all hover:border-skin-four bg-skin-primary"
        
        onClick={handleDeliveryView}
      >
        <AiOutlinePlus size={24} className="me-2" />
        <span className="ps-1.5">{t('text-elan')}</span>
        {/* <LocationIcon />
        <span className="ps-1.5">{t('text-delivery')}:</span>
        <span className="font-semibold text-skin-primary relative top-[1px] ps-1">
          {!isAuthorized ? t('text-address') : t('text-home-address')}
        </span>
        <span className="ps-1.5 relative top-0.5">
          <FaChevronDown className="text-skin-base text-opacity-40 text-xs" />
        </span> */}
      </button>
    </div>
  );
};

export default Delivery;
