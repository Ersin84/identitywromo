import Layout from '@components/layout/layout';

import ProductUserGrid from '@components/product/user-product';

export default function UserProduct() {
  return (
    <div className="flex flex-col pt-8 2xl:pt-12">
      <ProductUserGrid />
    </div>
  );
}

UserProduct.Layout = Layout;
