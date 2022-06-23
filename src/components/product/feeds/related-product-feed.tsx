import ProductsCarousel from '@components/product/products-carousel';
import { useRelatedProductsQuery } from '@framework/product/get-related-product';
import { LIMITS } from '@framework/utils/limits';

interface RelatedProductsProps {
  carouselBreakpoint?: {} | any;
  categoryId?: string | any;
  className?: string;
  uniqueKey?: string;
  productId?:string;
}

const RelatedProductFeed: React.FC<RelatedProductsProps> = ({
  carouselBreakpoint,
  categoryId,
  productId,
  className,
  uniqueKey = 'related-product-popup',
}) => {
  const { data, isLoading, error } = useRelatedProductsQuery({
    limit: LIMITS.RELATED_PRODUCTS_LIMITS,
    category:categoryId
  });
  return (
    <ProductsCarousel
      sectionHeading="text-related-products"
      categoryName="/search"
      className={className}
      productId={productId}
      products={data?.data}
      loading={isLoading}
      error={error?.message}
      limit={LIMITS.RELATED_PRODUCTS_LIMITS}
      uniqueKey={uniqueKey}
      carouselBreakpoint={carouselBreakpoint}
    />
  );
};

export default RelatedProductFeed;
