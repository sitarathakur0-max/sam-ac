export type PageId =
  | 'home'
  | 'services'
  | 'repair'
  | 'installation'
  | 'maintenance'
  | 'faqs'
  | 'about'
  | 'contact'
  | 'privacy';

export interface BusinessDetails {
  name: string;
  phone: string;
  phoneRaw: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  facebookUrl: string;
}

export const BUSINESS_INFO: BusinessDetails = {
  name: 'SAIM AC Service',
  phone: '+92 300 9622866',
  phoneRaw: '+923009622866',
  address: 'House #528/56B, Mian Fazal Haq Colony, Mujhid Road, Main Bazar, Ideal Garden Housing Scheme',
  city: 'Lahore',
  postalCode: '54760',
  country: 'Pakistan',
  facebookUrl: 'https://web.facebook.com/SaimACService/'
};

export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  page: PageId;
  iconName: string;
  checklist: string[];
}
