import { MenuEntry } from '@pancakeswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://url/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://url/#/pool',
      },
      {
        label: 'LP Migration',
        href: 'https://url/#/migrate',
      },
      {
        label: 'V1 Liquidity (Old)',
        href: 'https://url/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Prediction',
    icon: 'PredictionsIcon',
    href: '/prediction',
    status: {
      text: 'BETA',
      color: 'warning',
    },
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: '/competition',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Task Center',
        href: '/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'url',
      },
      {
        label: 'Tokens',
        href: 'https://url/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://url/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://url/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://url/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://url',
      },
      {
        label: 'Github',
        href: 'https://github.com/kekswap',
      },
      {
        label: 'Docs',
        href: 'https://url',
      },
      {
        label: 'Blog',
        href: 'https://url',
      },
      {
        label: 'Merch',
        href: 'https://url/',
      },
    ],
  },
]

export default config
