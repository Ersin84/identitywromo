import { ILFlag } from '@components/icons/language/ILFlag';
import { SAFlag } from '@components/icons/language/SAFlag';
import { CNFlag } from '@components/icons/language/CNFlag';
import { USFlag } from '@components/icons/language/USFlag';
import { DEFlag } from '@components/icons/language/DEFlag';
import { ESFlag } from '@components/icons/language/ESFlag';
import { AZFlag } from '@components/icons/language/AZFlag';
import { RUFlag } from '@components/icons/language/RUFlag';

export const siteSettings = {
  name: 'IdentityWromo',
  description:
    'Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.',
  author: {
    name: 'Wromo, Inc.',
    websiteUrl: 'https://identity-wromo.tk',
    address: '',
  },
  logo: {
    url: '/assets/images/logo.svg',
    alt: 'IdentityWromo',
    href: '/',
    width: 128,
    height: 30,
  },
  success: {
    url: '/assets/images/success.png',
    alt: 'Success',
    href: '/',
    width: 128,
    height: 120,
  },
  defaultLanguage: 'az',
  currencyCode: 'AZN',
  site_header: {
    menu: [
     
     
      {
        id: 4,
        path: '/search/',
        label: 'menu-search',
      },
      {
        id: 5,
        path: '/shops/',
        label: 'menu-shops',
      },
      {
        id: 6,
        path: '/',
        label: 'menu-pages',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'menu-users',
            subMenu: [
              {
                id: 1,
                path: '/my-account/account-settings',
                label: 'menu-my-account',
              },
              {
                id: 2,
                path: '/signin',
                label: 'menu-sign-in',
              },
              {
                id: 3,
                path: '/signup',
                label: 'menu-sign-up',
              },
            ],
          },
          {
            id: 2,
            path: '/faq',
            label: 'menu-faq',
          },
          {
            id: 3,
            path: '/about-us',
            label: 'menu-about-us',
          },
          {
            id: 4,
            path: '/privacy',
            label: 'menu-privacy-policy',
          },
          {
            id: 5,
            path: '/terms',
            label: 'menu-terms-condition',
          },
          {
            id: 6,
            path: '/contact-us',
            label: 'menu-contact-us',
          },
          {
            id: 7,
            path: '/checkout',
            label: 'menu-checkout',
          },
          {
            id: 8,
            path: '/404',
            label: 'menu-404',
          },
        ],
      },
    ],
    languageMenu: [
      {
        id: 'az',
        name: 'Azərbaycan - AZ',
        value: 'az',
        icon: <AZFlag />,
      },
      {
        id: 'ru',
        name: 'Россия - RU',
        value: 'ru',
        icon: <RUFlag />,
      },
      {
        id: 'en',
        name: 'English - EN',
        value: 'en',
        icon: <USFlag />,
      },
      {
        id: 'he',
        name: 'rעברית - HE',
        value: 'he',
        icon: <ILFlag />,
      },
     
    ],
  },
};
