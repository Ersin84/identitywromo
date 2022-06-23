import { useState } from 'react';
import type { FC } from 'react';
import { Product } from '@framework/types';
import { Tab } from '@headlessui/react';
import Heading from '@components/ui/heading';
import ProductReviewRating from './product-review-rating';
import { useTranslation } from 'next-i18next';
import RelatedProductFeed from '@components/product/feeds/related-product-feed';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
interface ProductProps {
  product: Product;
  className?: string;
}
const ProductDetailsTab: FC<ProductProps> = ({ product, className }) => {
  let [tabHeading] = useState({
    Product_Details: '',
    Review_Rating: '',
  });
  const { t } = useTranslation();

  const { id,model, email, phone,unitPrice,note,categoryId } = product ?? {};
 
  return (
    <>
    <div className="w-full xl:px-2 py-11 lg:py-14 xl:py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="block border-b border-skin-base space-s-8">
          {Object.keys(tabHeading).map((item) => (
            <Tab
              key={item}
              className={({ selected }) =>
                classNames(
                  'relative inline-block transition-all text-15px lg:text-17px leading-5 text-skin-base focus:outline-none pb-3 lg:pb-5 hover:text-skin-primary',
                  selected
                    ? 'font-semibold after:absolute after:w-full after:h-0.5 after:bottom-0 after:translate-y-[1px] after:start-0 after:bg-skin-primary'
                    : ''
                )
              }
            >
              {item.split('_').join(' ')}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-6 lg:mt-9">
          <Tab.Panel className="lg:flex">
            <div className="text-sm sm:text-15px text-skin-muted leading-[2em] space-y-4 lg:space-y-5 xl:space-y-7">
              <p>
               {note}
              </p>
              
              
             
            </div>
            <div className="flex-shrink-0 lg:w-[500px] xl:w-[600px] 2xl:w-[650px] 3xl:w-[800px] lg:ps-10 xl:ps-14 2xl:ps-20 pt-5 lg:pt-0">
              <Heading
                variant="mediumHeading"
                className="xl:text-lg mb-4 pt-0.5"
              >
                {t('forms:personal-information')}
              </Heading>
              <div className="border border-skin-four rounded">
                <table className="w-full text-skin-base text-15px">
                  <thead>
                    {/* <tr className="border-b border-skin-four">
                      <th className="border-s border-skin-four px-4 lg:px-5 xl:px-6 pt-3 pb-5 text-end w-24 lg:w-28 xl:w-36 font-semibold text-2xl lg:text-3xl xl:text-[36px]">
                        Amount per serving
                        <span className="block font-semibold text-lg lg:text-xl xl:text-2xl pt-0.5">
                          Calories
                        </span>
                      </th>
                      <th  className="px-4 lg:px-5 xl:px-6 pt-3 pb-4 lg:pb-6 text-start text-sm lg:text-15px xl:text-base font-medium" >
                        70
                      </th>
                    </tr> */}
                  </thead>
                  <tbody>
                    <tr className="border-b font-normal border-skin-four last:border-b-0">
                      <td className="border-s border-skin-four px-4 lg:px-5 xl:px-6 py-3 text-end w-24 lg:w-28 xl:w-36" >
                        Ad:
                      </td>
                      <td className="px-4 lg:px-5 xl:px-6 py-3" >
                        {model}
                      </td>
                    </tr>
                    <tr className="border-b font-normal border-skin-four last:border-b-0">
                      <td className="border-s border-skin-four px-4 lg:px-5 xl:px-6 py-3 text-end w-30 lg:w-30 xl:w-36">
                        Telefon:
                      </td>
                      <td  className="px-4 lg:px-5 xl:px-6 py-3">
                        {phone}
                      </td>
                    </tr>
                    <tr className="border-b font-normal border-skin-four last:border-b-0">
                      <td className="border-s border-skin-four px-4 lg:px-5 xl:px-6 py-3 text-end w-24 lg:w-28 xl:w-36" >E-poçt:</td>
                      <td className="px-4 lg:px-5 xl:px-6 py-3">
                        {email}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <ProductReviewRating />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      
    </div>
    <RelatedProductFeed
          uniqueKey="related-products"
          categoryId={categoryId}
          productId={String(id)}
          className="mb-0.5 md:mb-2 lg:mb-3.5 xl:mb-4 2xl:mb-6"
        />
    </>
  );
}
export default ProductDetailsTab;