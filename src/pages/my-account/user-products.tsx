import Layout from '@components/layout/layout';
import AccountLayout from '@components/my-account/account-layout';
import UserProduct from '@components/my-account/user-product';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import Seo from '@components/seo/seo';

export default function LegalNotice() {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        title="UserProduct"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="my-account/user-product"
      />
      <AccountLayout>
        <h2 className="text-base md:text-lg xl:text-[20px] font-semibold text-skin-base  lg:pt-0">
          {t('common:text-account-product')}
        </h2>
        <UserProduct />
      </AccountLayout>
    </>
  );
}

LegalNotice.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
  };
};
