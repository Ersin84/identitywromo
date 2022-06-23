import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import Link from '@components/ui/link';
import { IoIosArrowForward } from 'react-icons/io';
import Image from '@components/ui/image';
import { ROUTES } from '@utils/routes';

function CategoryMenuItem({  item }: any) {
  // const { t } = useTranslation('common');
  const { name, subCategories: items, id } = item;
  return (
   
     <optgroup label={name}>
     
        {Array.isArray(items) ? (
         
           <>
              <option value={id}>{name}</option>
              {items?.map((currentItem) => {
                return(
                  
                  <CategoryMenuItem1 item={currentItem} />
                );
               
              })}
          </>
          
        ) :   (
          <>
               <option value={id}>{name}</option>
          </>
        )     }
        </optgroup>
      
  );
}
function CategoryMenuItem1({  item }: any) {
  // const { t } = useTranslation('common');
  const { name, subCategories: items, id } = item;
  return (
    <>
     
        {Array.isArray(items) ? (
         
           <>
              <option value={id}>{name}</option>
              {items?.map((currentItem) => {
                return(
                  <CategoryMenuItem2 item={currentItem} />
                );
               
              })}
          </>
          
        ) : (
          <>
               <option value={id}>{name}</option>
          </>
        )}
      </>
  );
}
function CategoryMenuItem2({  item }: any) {
  // const { t } = useTranslation('common');
  const { name, subCategories: items, id } = item;
  return (
    <>
     
        {Array.isArray(items) ? (
         
           <>
              <option value={id}>{name}</option>
              {items?.map((currentItem) => {
                return(
                  <option value={currentItem.id}>{currentItem.name}</option>
                );
               
              })}
          </>
          
        ) : (
          <>
          <option value={id}>{name}</option>
             </>
        )}
      </>
  );
}
function CategorySelectMenu({ items, }: any) {
  //  console.log("ref",ref);
  //  console.log("rest",...rest);
   
   

  return (
  <>
         <option value="">Siyahıdan seçin</option>
        
         {items?.map((item1: any) => (
            
           <CategoryMenuItem item={item1} />
        
      ))}
  </>
  );
}

export default CategorySelectMenu;
