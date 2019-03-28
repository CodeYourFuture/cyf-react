import pipedrive from '../../assets/images/logos/pipedrive.png';
import ticketmaster from '../../assets/images/logos/ticketmaster.png';
import github from '../../assets/images/logos/github.png';
import geckoboard from '../../assets/images/logos/geckoboard.png';
import slack from '../../assets/images/logos/slack.png';
import kinningParkComplex from '../../assets/images/logos/kinningparkcomplex.png';
import skyscannerLogo from '../../assets/images/logos/skyscanner.svg';
import coop from '../../assets/images/logos/coop.png';
import airtame from '../../assets/images/logos/airtame.png';
import honeycomb from '../../assets/images/logos/honeycombworks.png';
import lventure from '../../assets/images/logos/logoenlabs2.png';
import enlabs from '../../assets/images/logos/enlabs2.png';
import onemyfi from '../../assets/images/logos/ONEMYFI.png';

const partners = {
  general: [
    {
      id: 'github',
      name: 'GitHub',
      url: 'http://github.com/',
      logo: github,
      featured: false,
    },
  ],

  london: [
    {
      id: 'ticketmaster',
      name: 'Ticketmaster',
      url: 'http://www.ticketmaster.com/',
      logo: ticketmaster,
      featured: true,
    },
    {
      id: 'geckoboard',
      name: 'Geckoboard',
      url: 'http://www.geckoboard.com/',
      logo: geckoboard,
      featured: false,
    },
  ],

  scotland: [
    {
      id: 'skyscanner-scotland',
      name: 'Skyscanner',
      url: 'https://skyscanner.net',
      logo: skyscannerLogo,
      featured: true,
    },
    {
      id: 'kinningParkComplex',
      name: 'Kinning Park Complex',
      url: 'http://kinningparkcomplex.org',
      logo: kinningParkComplex,
      featured: false,
    },
  ],

  manchester: [
    {
      id: 'coop',
      name: 'Co-op',
      url: 'http://www.coop.co.uk',
      logo: coop,
      featured: false,
    },
  ],

  rome: [
    {
      id: 'lventure',
      name: 'LVenture Group',
      url: 'https://lventuregroup.com/?lang=en',
      logo: lventure,
      featured: false,
    },
    {
      id: 'luissenlabs',
      name: 'Luiss EnLabs',
      url: 'https://luissenlabs.com/',
      logo: enlabs,
      featured: true,
    },
    {
      id: 'ONEMYFI',
      name: 'ONEMYFI',
      url: 'https://www.expressowifi.com/',
      logo: onemyfi,
      featured: false,
    },
  ],

  soft: [
    {
      id: 'thehoneycombworks',
      name: 'The Honeycomb works',
      url: 'http://www.thehoneycombworks.com/',
      logo: honeycomb,
      featured: false,
    },
  ],

  tech: [
    {
      id: 'pipedrive',
      name: 'Pipedrive',
      url: 'http://www.pipedrive.com',
      logo: pipedrive,
      featured: false,
    },
    {
      id: 'slack',
      name: 'Slack',
      url: 'http://slack.com/',
      logo: slack,
      featured: false,
    },
    {
      id: 'airtame',
      name: 'Airtame',
      url: 'https://airtame.com',
      logo: airtame,
      featured: false,
    },
  ],
};

export default partners;
