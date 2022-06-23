import cn from 'classnames';
import { useRouter } from 'next/router';
import {useMemo} from 'react';
import { useTranslation } from 'next-i18next';
import Link from '@components/ui/link';
import { IoIosArrowForward } from 'react-icons/io';
import Image from '@components/ui/image';
import { ROUTES } from '@utils/routes';

function SidebarMenuItem({ className, item, depth = 0, }: any) {
  const { t } = useTranslation('common');
  const router = useRouter();
  let { pathname, query } = router;
  pathname="/search";
  
  let selectedCategories = useMemo(
    () => (query?.category ? (query.category as string).split(',',1) : []),
    [query?.category]
  );
 

  const { name, subCategories: items, icon } = item;
  function onClick() {
    
    
     
      selectedCategories=[];
      const { category, ...restQuery } = query;
       
      
      // let currentFormState;
      //   if(selectedCategories.length >0){
      //     selectedCategories=[],
      //   currentFormState=[...selectedCategories, name]
      //   }else{
      //    currentFormState=[...selectedCategories, name]
      //   }
      
      
        
      let currentFormState=[...selectedCategories, name]
      
      router.push(
        {
          pathname,
          query: {
            ...restQuery,
            ...(!!currentFormState.length
              ? { category: currentFormState.join(',') }
              : {}),
          },
        },
        undefined,
        { scroll: false }
      );
     
      
    //   displaySidebar && closeSidebar();
    //  console.log(displaySidebar,closeSidebar);
    
  }
  return (
    <>
      <li
        className={`flex justify-between items-center transition ${
          className
            ? className
            : 'text-sm hover:text-skin-primary hover:cursor-pointer px-3.5 2xl:px-4 py-2.5 border-b border-skin-base last:border-b-0'
        }`}
      >
        <div
          onClick={onClick}
          
          className={cn(
            'flex items-center w-full text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base'
          )}
        >
          {icon && (
            <div className="inline-flex flex-shrink-0 w-8 3xl:h-auto">
              <Image
                src={icon ?? '/assets/placeholder/category-small.svg'}
                alt={name || t('text-category-thumbnail')}
                width={25}
                height={25}
              />
            </div>
          )}
          <span className="capitalize ps-2.5 md:ps-4 2xl:ps-3 3xl:ps-4">
            {name}
          </span>
          {items && (
            <span className="ms-auto hidden md:inline-flex">
              <IoIosArrowForward className="text-15px text-skin-base text-opacity-40" />
            </span>
          )}
        </div>
        {Array.isArray(items) ? (
          <div className="hidden md:block absolute z-10 left-full top-0 w-full h-full bg-skin-fill border border-skin-base rounded-md opacity-0 invisible">
            <ul key="content" className={cn(
                    'w-64 md:w-72 h-430px bg-skin-fill border border-skin-base rounded-md category-dropdown-menu pt-1.5',
                    className
                  )}>
              {items?.map((currentItem) => {
                const childDepth = depth + 1;
                return (
                  <SidebarMenuItem
                  key={`${currentItem.name}-key-${currentItem.id}`}
                    item={currentItem}
                    epth={childDepth}
                    // className={cn(
                    //   'text-sm px-3 py-3 pe-4 text-skin-muted hover:text-skin-primary border-b border-skin-base last:border-b-0 mb-0.5'
                    // )}
                  />
                  // <SidebarMenuItem key={`${currentItem.name}-key-${currentItem.id}`} item={currentItem.subCategories} />
                );
              })}
            </ul>
          </div>
        ) : null}
                                
        </li>
      </>
  );
}

function SidebarMenu({ items, className }: any) {
  return (
    <ul
      className={cn(
        'w-64 md:w-72 h-430px bg-skin-fill border border-skin-base rounded-md category-dropdown-menu pt-1.5',
        className
      )}
    >
      {items?.map((item: any) => (
        <SidebarMenuItem key={`${item.name}-key-${item.id}`} item={item} />
      ))}
    </ul>
  );
}

export default SidebarMenu;
