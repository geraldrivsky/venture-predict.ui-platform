import {
  NavFollowing,
  NavMore,
  NavSharedWithMe,
  NavStartups,
} from '../../assets/svgs';

export const getData = ({
  startupsCounter,
  followingCounter,
  sharedWithMeCounter,
}: any) => [
  {
    Svg: NavStartups,
    id: 1,
    navTitle: 'Startups',
    supCounter: startupsCounter,
    btn: { text: 'add my startup' },
  },
  {
    Svg: NavFollowing,
    id: 2,
    navTitle: 'Following',
    supCounter: followingCounter,
    btn: { text: 'invite others to add their profile' },
  },
  {
    Svg: NavSharedWithMe,
    id: 3,
    navTitle: 'Shared with me',
    supCounter: sharedWithMeCounter,
    btn: { text: 'invite others to add their profile' },
  },
  {
    Svg: NavMore,
    id: 4,
    title: 'More actions',
    navTitle: 'More',
    btns: [
      { text: 'add my startup', id: 1 },
      { text: 'info page', id: 2 },
      { text: 'other action', id: 3 },
      { text: 'reach out to venturepredict', id: 4 },
    ],
  },
];
