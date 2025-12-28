import { InstituteInfo, CompanyLogo } from '../types';

export const instituteInfo: InstituteInfo = {
  name: 'Firewall Zone Institute of IT',
  tagline: "India's premier institute for the best networking courses",
  description: 'Expert support and industry-leading training in CCNA RS, CCNP Security, Networking, and Cyber Security Courses, empowering individuals with the skills to achieve independence, career growth, and technical excellence.',
  stats: {
    experience: '25+',
    devices: '100+',
    students: '5000+',
    companies: '50+'
  },
  contact: {
    phone: ['+91 888 6192132', '040-23530263'],
    email: 'info@firewall-zone.com',
    address: 'Opp: Pillar No: 3, Royal Colony, Mehdipatnam, Hyderabad, Telangana, India',
    mapUrl: 'https://www.google.com/maps?q=Royal+Colony+Mehdipatnam+Hyderabad'
  },
  social: {
    facebook: 'https://www.facebook.com/FirewallZoneInstituteofIT/',
    youtube: 'https://www.youtube.com/@arifuddin8652',
    pinterest: 'https://in.pinterest.com/firewallzone/',
    linkedin: 'https://www.linkedin.com/company/firewall-zone/'
  }
};

// 16 Client companies
export const companyLogos: CompanyLogo[] = [
  { id: '1', name: 'NASCO', logo: '/images/clients/nasco.png' },
  { id: '2', name: 'Fujitsu Siemens', logo: '/images/clients/fujitsu.png' },
  { id: '3', name: 'King & Spalding', logo: '/images/clients/king-spalding.png' },
  { id: '4', name: 'Yesser', logo: '/images/clients/yesser.png' },
  { id: '5', name: 'SADAD', logo: '/images/clients/sadad.png' },
  { id: '6', name: 'Takwa Co.', logo: '/images/clients/takwa.png' },
  { id: '7', name: 'Creative Systems', logo: '/images/clients/creative-systems.png' },
  { id: '8', name: 'BG Technology', logo: '/images/clients/bg-technology.png' },
  { id: '9', name: 'Asas Pan Gulf', logo: '/images/clients/asas-pangulf.png' },
  { id: '10', name: 'Samir Group', logo: '/images/clients/samir-group.png' },
  { id: '11', name: 'SIDF', logo: '/images/clients/sidf.png' },
  { id: '12', name: 'Reyada Technology', logo: '/images/clients/reyada.png' },
  { id: '13', name: 'Royal Saudi Air Force', logo: '/images/clients/rsaf.png' },
  { id: '14', name: 'Zamil Offshore', logo: '/images/clients/zamil.png' },
  { id: '15', name: 'Hoshanco Holding', logo: '/images/clients/hoshanco.png' },
  { id: '16', name: 'Al-Rashid Trading', logo: '/images/clients/alrashid.png' }
];

export const highlights = [
  '25+ Years of Experience',
  'Highly Equipped Labs with Latest Advanced Equipment',
  'More than 100+ Routers, Switches and Firewalls',
  'Highly Qualified Experienced Faculty',
  'Hands-on Training with Real Equipment',
  'Job Placement Assistance',
  'Flexible Batch Timings',
  'Online & Offline Training Options'
];
