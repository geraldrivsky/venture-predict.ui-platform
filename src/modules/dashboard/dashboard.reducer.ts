import DataApi from '../data/data.api';

const initialState = {
  activeNavItemIndex: 0,
  startups: [],
  filteredStartups: [],
  navigationalStartups: [],
};

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case 'SWITCH_ACTIVE_NAV_ITEM_INDEX':
      return {
        ...state,
        activeNavItemIndex: payload,
      };
    case 'FILTER_STARTUPS':
      return {
        ...state,
        filteredStartups: payload,
      };
    case 'NAVIGATE_STARTUPS':
      return {
        ...state,
        navigationalStartups: payload,
        filteredStartups: payload,
      };
    case 'STARTUPS_ARE_FETCHED':
      return {
        ...state,
        startups: payload,
        filteredStartups: payload,
        navigationalStartups: payload,
      };

    default:
      return state;
  }
}

export const switchActiveNavItemIndex = (lastIndex: number) => (
  dispatch: any,
  getState: Function
) => {
  let filteredStartups: any[] = getState().DashboardState.startups;

  if (lastIndex === 1)
    filteredStartups = filteredStartups.filter(
      ({ isFollowed }) => isFollowed
    );

  if (lastIndex === 2)
    filteredStartups = filteredStartups.filter(
      ({ isShared }) => isShared
    );

  dispatch({
    type: 'NAVIGATE_STARTUPS',
    payload: filteredStartups,
  });

  dispatch({
    type: 'SWITCH_ACTIVE_NAV_ITEM_INDEX',
    payload: lastIndex,
  });
};

export const filterStartups = (inputValue: string) => (
  dispatch: any,
  getState: Function
) => {
  const filteredStartups = getState().DashboardState.navigationalStartups.filter(
    (startup: any) => {
      for (const [startupProp, startupValue] of Object.entries(
        startup
      )) {

        if (startupProp === 'logoSrc') continue;

        if (~`${startupValue}`.toLowerCase().indexOf(inputValue.toLowerCase()))
          return true;

        continue;
      }

      return false;
    }
  );

  dispatch({
    type: 'FILTER_STARTUPS',
    payload: filteredStartups,
  });
};

export const fetchStartupsData = () => async (dispatch: any) => {
  try {
    const data = await DataApi.getJsonData();

    dispatch({
      type: 'STARTUPS_ARE_FETCHED',
      payload: data,
    });
  } catch (error) {
    throw error;
  }
};
