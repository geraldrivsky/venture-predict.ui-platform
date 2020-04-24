import { Dispatch } from 'redux';
import DataApi from '../data/data.api';

const initialState = {
  startupData: null,
  startupPageNumber: 6,
};

export default function (state = initialState, { type, payload }: any) {
  switch (type) {
    case 'DATA_ARE_FETCHED':
      return {
        ...state,
        startupData: payload,
      };
    case 'RESET_STARTUP_WRAPPER_STATE':
      return initialState;
    case 'GO_TO_NEXT_STARTUP_PAGE':
      return {
        ...state,
        startupPageNumber: state.startupPageNumber + 1,
      };
    case 'GO_TO_LAST_STARTUP_PAGE':
      return {
        ...state,
        startupPageNumber: state.startupPageNumber - 1,
      };
    default:
      return state;
  }
}

export const resetStartupWrapperState = () => (dispatch: Dispatch) => {
  dispatch({
    type: 'RESET_STARTUP_WRAPPER_STATE',
  });
};

export const goToAnotherStartupPage = (direction: string) => (
  dispatch: Dispatch,
  getState: Function
) => {
  const startupPageNumber = getState().InfoPageState.startupPageNumber;

  if (startupPageNumber === 1 && direction === 'last') return;
  if (startupPageNumber === 9 && direction === 'next') return;

  switch (direction) {
    case 'next':
      dispatch({
        type: 'GO_TO_NEXT_STARTUP_PAGE',
      });
      break;
    case 'last':
      dispatch({
        type: 'GO_TO_LAST_STARTUP_PAGE',
      });
      break;
    default:
      break;
  }
};

export const fetchStartupData = () => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: 'START_FETCHING_DATA',
  });

  try {
    dispatch({
      type: 'DATA_ARE_FETCHED',
      payload: (await DataApi.getStartupInfoData()).StartupInfo,
    });
  } catch (error) {
    dispatch({
      type: 'DATA_ARE_NOT_FETCHED',
    });
  }
};
