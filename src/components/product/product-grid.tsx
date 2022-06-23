import type { FC} from 'react';
import { useState} from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Alert from '@components/ui/alert';
import Button from '@components/ui/button';
import ProductCard from '@components/product/product-cards/product-card';
import ProductCardLoader from '@components/ui/loaders/product-card-loader';
import cn from 'classnames';
import { useProductsQuery } from '@framework/product/get-all-products';
import { LIMITS } from '@framework/utils/limits';
import { Product } from '@framework/types';

interface ProductGridProps {
  className?: string;
}

export const ProductGrid: FC<ProductGridProps> = ({ className = '' }) => {
  const { t } = useTranslation('common');
  const { query } = useRouter();
  const {
    isFetching: isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    data,
    error,
  } = useProductsQuery({ limit: LIMITS.PRODUCTS_LIMITS, ...query });
 
 
  
  
  return (
    <>
      <div className="flex-shrink-0 text-skin-base font-medium text-15px leading-4 md:me-6 hidden lg:block mb-2">
            {data?.pages[0].dataCount} {t('text-items-found')}
          </div>
        <div
        className={cn(
          'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-3 md:gap-4 2xl:gap-5',
          className
        )}
      >
        
        {error ? (
          <div className="col-span-full">
            <Alert message={error?.message} />
          </div>
        ) : isLoading && !data?.pages?.length ? (
          Array.from({ length: 30 }).map((_, idx) => (
            <ProductCardLoader
              key={`product--key-${idx}`}
              uniqueKey={`product--key-${idx}`}
            />
          ))
        ) : (
          data?.pages?.map((page: any) => {
            let data1;
             if(typeof page.data[0] =='object'){
              data1=page?.data[0]
             }else if(typeof page.data[1] =='object'){
              data1=page?.data[1]
             }
             else{
              data1=page?.data[2]
             }
             
             
            return data1?.value.map((product: Product) => (
              <ProductCard
                key={`product--key-${product.id}`}
                product={product}
              />
            ))
           
            
          })
        )}
        
        {/* end of error state */}
      </div>
      {hasNextPage && (
        <div className="text-center pt-8 xl:pt-10">
          <Button
            // loading={loadingMore}
            disabled={!hasNextPage || isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
                  {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? t('button-load-more')
          : 'Nothing more to load'}
            
          </Button>
        </div>
      )}
    </>
  );
};
