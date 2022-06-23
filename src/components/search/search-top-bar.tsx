import { Drawer } from '@components/common/drawer/drawer';
import FilterIcon from '@components/icons/filter-icon';
import Text from '@components/ui/text';
import { useUI } from '@contexts/ui.context';
import FilterSidebar from '@components/search/filter-sidebar';
import ListBox from '@components/ui/filter-list-box';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { getDirection } from '@utils/get-direction';

const SearchTopBar = () => {
  const { openFilter, displayFilter, closeFilter } = useUI();
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const dir = getDirection(locale);
  const contentWrapperCSS = dir === 'ltr' ? { left: 0 } : { right: 0 };
  return (
    <div className="flex  items-center mb-6">
      <button
        className="lg:hidden text-skin-base text-sm px-4 py-2 font-semibold border border-skin-base rounded-md flex items-center transition duration-200 ease-in-out focus:outline-none hover:border-skin-primary hover:text-skin-primary"
        onClick={openFilter}
      >
        <FilterIcon />
        <span className="ps-2.5">{t('text-filters')}</span>
      </button>
      <div className="flex w-full items-center justify-end ">
        
        <ListBox
          options={[
            { name: 'text-select', value: '' },
            { name: 'text-lowest-price', value: 'unitPrice' },
            { name: 'text-highest-price', value: 'unitPrice DESC' },
            { name: 'text-new-arrival', value: 'showDate' },
            { name: 'text-most-order', value: 'showDate DESC ' },
          ]}
        />
      </div>
      <Drawer
        placement={dir === 'rtl' ? 'right' : 'left'}
        open={displayFilter}
        onClose={closeFilter}
        handler={false}
        showMask={true}
        level={null}
        contentWrapperStyle={contentWrapperCSS}
      >
        <FilterSidebar />
      </Drawer>
    </div>
  );
};

export default SearchTopBar;
