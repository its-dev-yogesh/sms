import { NavItemInterface } from '@/interfaces/nav.interface';
import { getUniqueId } from '@/utils';

export const HOME_NAV_CONFIG = [
  {
    type: 'button',
    label: 'Home',
    altLabel: 'Homepage',
    action: 'navigate',
    target: '/home',
    altTarget: '/homepage',
    icon: 'mdi:home',
    altIcon: 'mdi:home-outline'
  },
  {
    type: 'menu',
    label: 'Services',
    altLabel: 'Our Services',
    icon: 'mdi:tools',
    altIcon: 'mdi:hammer-wrench',
    items: [
      {
        type: 'link',
        label: 'Web Development',
        altLabel: 'Website Development',
        target: '/services/web-development',
        altTarget: '/services/web-dev',
        icon: 'mdi:web',
        altIcon: 'mdi:web-box'
      },
      {
        type: 'menu',
        label: 'Mobile Development',
        altLabel: 'App Development',
        icon: 'mdi:cellphone',
        altIcon: 'mdi:cellphone-android',
        items: [
          {
            type: 'link',
            label: 'iOS Development',
            altLabel: 'iPhone Development',
            target: '/services/mobile-development/ios',
            altTarget: '/services/mobile-dev/ios',
            icon: 'mdi:cellphone-iphone',
            altIcon: 'mdi:apple-ios'
          },
          {
            type: 'link',
            label: 'Android Development',
            altLabel: 'Android App Development',
            target: '/services/mobile-development/android',
            altTarget: '/services/mobile-dev/android',
            icon: 'mdi:android',
            altIcon: 'mdi:google-play'
          }
        ]
      },
      {
        type: 'link',
        label: 'SEO',
        altLabel: 'Search Engine Optimization',
        target: '/services/seo',
        altTarget: '/services/search-optimization',
        icon: 'mdi:magnify',
        altIcon: 'mdi:magnify-minus'
      }
    ]
  },
  {
    type: 'menu',
    label: 'Products',
    altLabel: 'Our Products',
    icon: 'mdi:cart',
    altIcon: 'mdi:store',
    items: [
      {
        type: 'menu',
        label: 'Software',
        altLabel: 'Software Products',
        icon: 'mdi:desktop-classic',
        altIcon: 'mdi:code-braces',
        items: [
          {
            type: 'link',
            label: 'Product A',
            altLabel: 'Software A',
            target: '/products/software/a',
            altTarget: '/products/software-a',
            image: '/assets/productA.png',
            altImage: '/assets/softwareA.png',
            url: 'https://example.com/productA',
            altUrl: 'https://example.com/softwareA',
            icon: 'mdi:application',
            altIcon: 'mdi:application-outline'
          },
          {
            type: 'link',
            label: 'Product B',
            altLabel: 'Software B',
            target: '/products/software/b',
            altTarget: '/products/software-b',
            image: '/assets/productB.png',
            altImage: '/assets/softwareB.png',
            url: 'https://example.com/productB',
            altUrl: 'https://example.com/softwareB',
            icon: 'mdi:application',
            altIcon: 'mdi:application-outline'
          }
        ]
      },
      {
        type: 'link',
        label: 'Hardware',
        altLabel: 'Hardware Products',
        target: '/products/hardware',
        altTarget: '/products/hardware-products',
        icon: 'mdi:devices',
        altIcon: 'mdi:hardware'
      }
    ]
  },
  {
    type: 'iconButton',
    icon: 'mdi:magnify',
    altIcon: 'mdi:magnify-plus',
    action: 'openSearch',
    altAction: 'startSearch'
  },
  {
    type: 'anchor',
    label: 'Contact',
    altLabel: 'Get in Touch',
    url: 'mailto:contact@example.com',
    altUrl: 'mailto:support@example.com',
    icon: 'mdi:email',
    altIcon: 'mdi:email-outline'
  },
  {
    type: 'profileIcon',
    icon: 'mdi:account-circle',
    altIcon: 'mdi:account',
    menu: [
      {
        type: 'link',
        label: 'Profile',
        altLabel: 'My Profile',
        target: '/profile',
        altTarget: '/user-profile',
        icon: 'mdi:account',
        altIcon: 'mdi:account-box'
      },
      {
        type: 'link',
        label: 'Settings',
        altLabel: 'Account Settings',
        target: '/settings',
        altTarget: '/account-settings',
        icon: 'mdi:cog',
        altIcon: 'mdi:tune'
      },
      {
        type: 'button',
        label: 'Logout',
        altLabel: 'Sign Out',
        action: 'logout',
        altAction: 'signOut',
        icon: 'mdi:logout',
        altIcon: 'mdi:exit-to-app'
      }
    ]
  },
  {
    type: 'image',
    src: '/assets/logo.png',
    altSrc: '/assets/logo_alt.png',
    alt: 'Company Logo',
    altAlt: 'Our Logo',
    action: 'navigate',
    altAction: 'goHome',
    target: '/home',
    altTarget: '/homepage',
    icon: 'mdi:image',
    altIcon: 'mdi:photo'
  }
];

export const DASHBOARD_NAV_CONFIG = [
  {
    type: 'button',
    label: 'Home',
    altLabel: 'Homepage',
    action: 'navigate',
    target: '/home',
    altTarget: '/homepage',
    icon: 'mdi:home',
    altIcon: 'mdi:home-outline'
  },
  {
    type: 'menu',
    label: 'Services',
    altLabel: 'Our Services',
    icon: 'mdi:tools',
    altIcon: 'mdi:hammer-wrench',
    items: [
      {
        type: 'link',
        label: 'Web Development',
        altLabel: 'Website Development',
        target: '/services/web-development',
        altTarget: '/services/web-dev',
        icon: 'mdi:web',
        altIcon: 'mdi:web-box'
      },
      {
        type: 'menu',
        label: 'Mobile Development',
        altLabel: 'App Development',
        icon: 'mdi:cellphone',
        altIcon: 'mdi:cellphone-android',
        items: [
          {
            type: 'link',
            label: 'iOS Development',
            altLabel: 'iPhone Development',
            target: '/services/mobile-development/ios',
            altTarget: '/services/mobile-dev/ios',
            icon: 'mdi:cellphone-iphone',
            altIcon: 'mdi:apple-ios'
          },
          {
            type: 'link',
            label: 'Android Development',
            altLabel: 'Android App Development',
            target: '/services/mobile-development/android',
            altTarget: '/services/mobile-dev/android',
            icon: 'mdi:android',
            altIcon: 'mdi:google-play'
          }
        ]
      },
      {
        type: 'link',
        label: 'SEO',
        altLabel: 'Search Engine Optimization',
        target: '/services/seo',
        altTarget: '/services/search-optimization',
        icon: 'mdi:magnify',
        altIcon: 'mdi:magnify-minus'
      }
    ]
  },
  {
    type: 'menu',
    label: 'Products',
    altLabel: 'Our Products',
    icon: 'mdi:cart',
    altIcon: 'mdi:store',
    items: [
      {
        type: 'menu',
        label: 'Software',
        altLabel: 'Software Products',
        icon: 'mdi:desktop-classic',
        altIcon: 'mdi:code-braces',
        items: [
          {
            type: 'link',
            label: 'Product A',
            altLabel: 'Software A',
            target: '/products/software/a',
            altTarget: '/products/software-a',
            image: '/assets/productA.png',
            altImage: '/assets/softwareA.png',
            url: 'https://example.com/productA',
            altUrl: 'https://example.com/softwareA',
            icon: 'mdi:application',
            altIcon: 'mdi:application-outline'
          },
          {
            type: 'link',
            label: 'Product B',
            altLabel: 'Software B',
            target: '/products/software/b',
            altTarget: '/products/software-b',
            image: '/assets/productB.png',
            altImage: '/assets/softwareB.png',
            url: 'https://example.com/productB',
            altUrl: 'https://example.com/softwareB',
            icon: 'mdi:application',
            altIcon: 'mdi:application-outline'
          }
        ]
      },
      {
        type: 'link',
        label: 'Hardware',
        altLabel: 'Hardware Products',
        target: '/products/hardware',
        altTarget: '/products/hardware-products',
        icon: 'mdi:devices',
        altIcon: 'mdi:hardware'
      }
    ]
  },
  {
    type: 'iconButton',
    icon: 'mdi:magnify',
    altIcon: 'mdi:magnify-plus',
    action: 'openSearch',
    altAction: 'startSearch'
  },
  {
    type: 'anchor',
    label: 'Contact',
    altLabel: 'Get in Touch',
    url: 'mailto:contact@example.com',
    altUrl: 'mailto:support@example.com',
    icon: 'mdi:email',
    altIcon: 'mdi:email-outline'
  },
  {
    type: 'profileIcon',
    icon: 'mdi:account-circle',
    altIcon: 'mdi:account',
    menu: [
      {
        type: 'link',
        label: 'Profile',
        altLabel: 'My Profile',
        target: '/profile',
        altTarget: '/user-profile',
        icon: 'mdi:account',
        altIcon: 'mdi:account-box'
      },
      {
        type: 'link',
        label: 'Settings',
        altLabel: 'Account Settings',
        target: '/settings',
        altTarget: '/account-settings',
        icon: 'mdi:cog',
        altIcon: 'mdi:tune'
      },
      {
        type: 'button',
        label: 'Logout',
        altLabel: 'Sign Out',
        action: 'logout',
        altAction: 'signOut',
        icon: 'mdi:logout',
        altIcon: 'mdi:exit-to-app'
      }
    ]
  },
  {
    type: 'image',
    src: '/assets/logo.png',
    altSrc: '/assets/logo_alt.png',
    alt: 'Company Logo',
    altAlt: 'Our Logo',
    action: 'navigate',
    altAction: 'goHome',
    target: '/home',
    altTarget: '/homepage',
    icon: 'mdi:image',
    altIcon: 'mdi:photo'
  }
];

export const NAV_DEMO: NavItemInterface[] = [
  {
    position: 'START',
    itemType: 'ICON_BUTTON',
    urlTo: '/',
    label: 'Slash',
    showLabel: true,
    showIcon: true,
    icon: 'ph:tidal-logo-duotone',
    width: 30,
    iconClass: 'text-neutral',
    className: 'bg-none p-1 gap-2',
    variant: 'text',
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: '/',
    label: 'Home',
    icon: 'dropdown-icon',
    width: 200,
    menuItems: [],
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: '/dropdown-url',
    label: 'Services',
    icon: 'dropdown-icon',
    width: 200,
    menuItems: [
      {
        type: 'SUB-MENU',
        label: 'CRM Software',
        urlTo: '/services#crm',
        icon: 'submenu-icon',
        subItems: [],
        id: getUniqueId()
      },
      {
        type: 'SUB-MENU',
        label: 'School Management System',
        urlTo: '/services#school-management-System',
        icon: 'submenu-icon',
        subItems: [],
        id: getUniqueId()
      }
    ],
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: '/dropdown-url',
    label: 'Services',
    icon: 'dropdown-icon',
    width: 200,
    menuItems: [
      {
        type: 'SUB-MENU',
        label: 'CRM Software',
        urlTo: '/services#crm',
        icon: 'submenu-icon',
        subItems: [],
        id: getUniqueId()
      },
      {
        type: 'SUB-MENU',
        label: 'School Management System',
        urlTo: '/services#school-management-System',
        icon: 'submenu-icon',
        subItems: [],
        id: getUniqueId()
      }
    ],
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: '/general/integrations',
    label: 'Integrations',
    icon: 'dropdown-icon',
    width: 200,
    menuItems: [],
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: '/general/pricing',
    label: 'Pricing',
    icon: 'dropdown-icon',
    width: 200,
    menuItems: [],
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: '/general/about',
    showLabel: true,
    showIcon: false,
    label: 'About',
    icon: 'dropdown-icon',
    width: 200,
    className:
      'rounded-lg btn-outline  overflow-hidden btn sm:block btn-sm hidden bg-transparent',
    menuItems: [],
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: '/general/faq',
    showLabel: true,
    showIcon: false,
    label: 'FAQ',
    icon: 'dropdown-icon',
    width: 200,
    className:
      'rounded-lg btn-outline  overflow-hidden btn sm:block btn-sm hidden bg-transparent',
    menuItems: [],
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: '/general/blogs',
    showLabel: true,
    showIcon: false,
    label: 'Blogs',
    icon: 'dropdown-icon',
    width: 200,
    className:
      'rounded-lg btn-outline  overflow-hidden btn sm:block btn-sm hidden bg-transparent',
    menuItems: [],
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: 'general/contact',
    showLabel: true,
    showIcon: false,
    label: 'Contact',
    icon: 'dropdown-icon',
    width: 200,
    className:
      'rounded-lg btn-outline  overflow-hidden btn sm:block btn-sm hidden bg-transparent',
    menuItems: [],
    id: getUniqueId()
  },
  {
    position: 'END',
    itemType: 'ICON_BUTTON',
    urlTo: '/auth/login',
    label: 'Login',
    showLabel: true,
    showIcon: false,
    icon: 'link-icon',
    width: 150,
    className: 'rounded-lg overflow-hidden md:block hidden',
    iconClass: '',
    variant: 'fill',
    id: getUniqueId()
  }
];
export const NAV_Mobile: NavItemInterface[] = [
  {
    position: 'START',
    itemType: 'ICON_BUTTON',
    urlTo: '/',
    label: 'Slash',
    showLabel: true,
    showIcon: true,
    width: 30,
    icon: 'ph:tidal-logo-duotone',

    variant: 'fill',
    iconClass: 'text-gray-400',
    className: 'bg-none p-1 gap-2',
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: '/demo',
    label: 'Home',
    icon: 'dropdown-icon',
    width: 200,
    menuItems: [],
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: '/dropdown-url',
    label: 'Services',
    icon: 'dropdown-icon',
    width: 200,
    menuItems: [
      {
        type: 'SUB-MENU',
        label: 'CRM Software',
        urlTo: '/services#crm',
        icon: 'submenu-icon',
        subItems: [],
        isSubItem: true,
        id: getUniqueId()
      },
      {
        type: 'SUB-MENU',
        label: 'School Management System',
        urlTo: '/services#school-management-System',
        icon: 'submenu-icon',
        subItems: [],
        isSubItem: true,
        id: getUniqueId()
      }
    ],
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: '/dropdown-url',
    label: 'Services',
    icon: 'dropdown-icon',
    width: 200,
    menuItems: [
      {
        type: 'SUB-MENU',
        label: 'CRM Software',
        urlTo: '/services#crm',
        icon: 'submenu-icon',
        subItems: [],
        id: getUniqueId()
      },
      {
        type: 'SUB-MENU',
        label: 'School Management System',
        urlTo: '/services#school-management-System',
        icon: 'submenu-icon',
        subItems: [],
        id: getUniqueId()
      }
    ],
    id: getUniqueId()
  },

  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: '/general/integrations',
    label: 'Integrations',
    icon: 'dropdown-icon',
    width: 200,
    menuItems: [],
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: '/general/pricing',
    label: 'Pricing',
    icon: 'dropdown-icon',
    width: 200,
    menuItems: [],
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: '/general/about',
    showLabel: true,
    showIcon: false,
    label: 'About',
    icon: 'dropdown-icon',
    width: 200,
    className:
      'rounded-lg btn-outline  overflow-hidden btn btn-sm md:hidden bg-transparent',
    menuItems: [],
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: '/general/faq',
    showLabel: true,
    showIcon: false,
    label: 'FAQ',
    icon: 'dropdown-icon',
    width: 200,
    className:
      'rounded-lg btn-outline  overflow-hidden btn btn-sm md:hidden bg-transparent',
    menuItems: [],
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: '/general/blogs',
    showLabel: true,
    showIcon: false,
    label: 'Blogs',
    icon: 'dropdown-icon',
    width: 200,
    className:
      'rounded-lg btn-outline  overflow-hidden btn  btn-sm md:hidden bg-transparent',
    menuItems: [],
    id: getUniqueId()
  },
  {
    position: 'CENTER',
    itemType: 'DROPDOWN',
    urlTo: 'general/contact',
    showLabel: true,
    showIcon: false,
    label: 'Contact',
    icon: 'dropdown-icon',
    width: 200,
    className:
      'rounded-lg btn-outline  overflow-hidden btn  btn-sm md:hidden bg-transparent',
    menuItems: [],
    id: getUniqueId()
  },
  {
    position: 'END',
    itemType: 'ICON_BUTTON',
    urlTo: '/auth/login',
    label: 'Login',
    showLabel: true,
    showIcon: false,
    icon: 'link-icon',
    width: 150,
    className:
      'rounded-lg btn-outline  overflow-hidden btn btn-sm hidden bg-transparent',
    iconClass: '',
    id: getUniqueId()
  }
];
