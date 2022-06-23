import type { FC } from 'react';
import { userProducts } from '@framework/product/get-user-product';
import ProductCardLoader from '@components/ui/loaders/product-card-loader';
import Alert from '@components/ui/alert';
import cn from 'classnames';
import UserProductCart from '@components/product/user-product-card';
interface ProductUserProps {
  element?: any;
  className?: string;
}
const ProductUserGrid: FC<ProductUserProps> = ({
  element,
  className = '',
}) => {
  const limit = 35;
  let { data, isLoading, error } = userProducts({
    limit: limit,
  });
  console.log("data",data);
  
  return (
    <div className={cn(className)}>
      {error ? (
        <Alert message={error?.message} />
      ) : (
        <div className="flex flex-col">
          {isLoading && !data?.length
            ? Array.from({ length: 35 }).map((_, idx) => (
                <ProductCardLoader
                  key={`product--key-${idx}`}
                  uniqueKey={`product--key-${idx}`}
                />
              ))
            : data?.data.map((product: any) => (
                <UserProductCart
                  key={`product--key${product.id}`}
                  product={product}
                />
              ))}
        </div>
      )}
    </div>
  );
};
export default ProductUserGrid;
